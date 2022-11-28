from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PeriodicPaymentInitiationJSON:
    r"""PeriodicPaymentInitiationJSON
    Generic Body for a periodic payment initation via JSON.
    
    This generic JSON body can be used to represent valid periodic payment initiations for the following JSON based payment product,
    which where defined in the Implementation Guidelines:
    
      * domestic-swiss-credit-transfers-isr
      * domestic-swiss-credit-transfers
      * domestic-swiss-credit-transfers-qr
      * domestic-swiss-foreign-credit-transfers
      * swiss-sepa-credit-transfers
      * swiss-cross-border-credit-transfers
    
    For the convenience of the implementer additional which are already predefinded in the Implementation Guidelines
    are included (but commented in source code), such that an ASPSP may add them easily.
    
    Take care: Since the format is intended to fit for all payment products
    there are additional conditions which are NOT covered by this specification.
    Please check the SIX Swiss Payment Standards implementation guidelines for details.
    
    
    The following data element are depending on the actual payment product available (in source code):
    
    <table style=\"width:100%\">
    <tr><td></td><td>Payment Type 1: ISR</td><td>Payment Type 3: IBAN/postal account and IID/BIC</td><td>Payment Type 3: QR-bill</td><td>Payment Type 4: Foreign currency</td><td>Payment Type 5: Foreign SEPA</td><td>Payment Type 6: Foreign</td></tr>
    <tr><td>CH Domestic Data Element</td><td>domestic-swiss-credit-transfers-isr</td><td>domestic-swiss-credit-transfers</td><td>domestic-swiss-credit-transfers-qr</td><td>domestic-swiss-foreign-credit-transfers</td><td>swiss-sepa-credit-transfers</td><td>swiss-cross-border-credit-transfers</td></tr>
    <tr><td>endToEndIdentification</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
    <tr><td>instructionIdentification</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
    <tr><td>debtorAccount (incl. type)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
    <tr><td>debtorAgent</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>optional</td></tr>
    <tr><td>debtorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
    <tr><td>debtorId</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td></tr>
    <tr><td>ultimateDebtor</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
    <tr><td>instructedAmount (incl. currency)</td><td>mandatory</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
    <tr><td>equivalentAmount</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
    <tr><td>transactionCurrency</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
    <tr><td>exchangeRateInformation</td><td>n.a.</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td></tr>
    <tr><td>creditorAccount</td><td>mandatory</td><td>mandatory</td><td>mandatory 8)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
    <tr><td>creditorAgent</td><td>n.a.</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td></tr>
    <tr><td>creditorAgentName</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>dependent 5)</td><td>n.a.</td><td>dependent 5)</td></tr>
    <tr><td>creditorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
    <tr><td>creditorId</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
    <tr><td>creditorAddress</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
    <tr><td>creditorNameAndAddress</td><td>n.a.</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td></tr>
    <tr><td>ultimateCreditor</td><td>n.a.</td><td>optional</td><td>n.a. (for future use)</td><td>optional</td><td>optional</td><td>optional</td></tr>
    <tr><td>chargeBearer</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>
    <tr><td>purposeCode</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
    <tr><td>serviceLevel</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>
    <tr><td>remittanceInformationUnstructured</td><td>n.a.</td><td>optional</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td></tr>
    <tr><td>remittanceInformationUnstructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
    <tr><td>remittanceInformationStructured</td><td>mandatory</td><td>optional</td><td>mandatory 6)</td><td>optional</td><td>optional</td><td>optional</td></tr>
    <tr><td>remittanceInformationStructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
    <tr><td>requestedExecutionDate</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
    <tr><td>requestedExecutionTime</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
    <tr><td>intermediaryAgent</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>optional 2)</td><td>n.a.</td><td>optional 2)</td></tr>
    <tr><td>startDate</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
    <tr><td>endDate</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
    <tr><td>executionRule</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
    <tr><td>frequency</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
    <tr><td>dayOfExecution</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td></tr>
    </table>
    
    Footnotes from the table:
    1) This element may only be used by agreement with the instructed financial institution.
    2) The element may only be used in consultation with the financial institution commissioned.
    3) The element is currently ignored by financial institutions.
    4) Dependence on creditorAccount, see SIX Swiss Payments Standards implementation guidelines.
    5) Type 4(V3), 6(V2, V3): Must be present. Type 4(V2): May be present. Other species: May not be present.
    6) QR-reference, creditor reference or IPI reference
    7) currencyOfTransfer is a subfield of equivalentAmount and may only be used if equivalentAmount is used instead of instructedAmount.
    8) QR-IBAN (CH/LI) must be present.
    
    IMPORTANT: In this API definition the following holds:
      *  All data elements mentioned above are defined, but some of them are commented,
        i.e. they are only visible in the source code and can be used by uncommenting them.
      * Data elements which are mandatory in the table above for all payment products
        are set to be mandatory in this specification.
      * Data elements which are indicated in the table above as n.a. for all payment products are commented in the source code.
      * Data elements which are indicated to be option, conditional or mandatory for at least one payment product
        in the table above are set to be optional in the s specification except the case where all are definde to be mandatory.
      * Data element which are inticated to be n.a. can be used by the ASPS if needed.
        In this case uncomment tthe the relatetd lines in the source code.
      * If one uses this data types for some payment products he has to ensure that the used data type is
        valid according to the underlying payment product, e.g. by some appropriate validations.
    
    """
    
    creditor_account: AccountReference16Ch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAccount') }})
    creditor_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorName') }})
    debtor_account: AccountReference16Ch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAccount') }})
    debtor_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorName') }})
    end_to_end_identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endToEndIdentification') }})
    frequency: FrequencyCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    start_date: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    charge_bearer: Optional[ChargeBearerEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeBearer') }})
    creditor_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAddress') }})
    creditor_agent: Optional[CreditorAgent7Ch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAgent') }})
    creditor_agent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAgentName') }})
    creditor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorId') }})
    creditor_name_and_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorNameAndAddress') }})
    day_of_execution: Optional[DayOfExecutionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfExecution') }})
    debtor_agent: Optional[DebtorAgent7Ch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAgent') }})
    debtor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorId') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    equivalent_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equivalentAmount') }})
    exchange_rate_information: Optional[ExchangeRateInformation1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeRateInformation') }})
    execution_rule: Optional[ExecutionRuleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRule') }})
    instructed_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructedAmount') }})
    intermediary_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intermediaryAgent') }})
    purpose_code: Optional[PurposeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purposeCode') }})
    remittance_information_structured: Optional[RemittanceInformationStructured] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationStructured') }})
    remittance_information_unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructured') }})
    service_level: Optional[ExternalServiceLevel1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceLevel') }})
    transaction_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionCurrency') }})
    ultimate_creditor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateCreditor') }})
    ultimate_debtor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateDebtor') }})
    
