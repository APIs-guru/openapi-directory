from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import obchargebearertype1code_enum
from . import obpostaladdress6
from . import obpostaladdress6
from . import obrisk1


@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiationCreditor:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiationCreditorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiationCreditorAgent:
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiationInstructedAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4DataInitiation:
    charge_bearer: Optional[obchargebearertype1code_enum.ObChargeBearerType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeBearer' }})
    creditor: Optional[ObWriteInternationalStandingOrder4DataInitiationCreditor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Creditor' }})
    creditor_account: ObWriteInternationalStandingOrder4DataInitiationCreditorAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_agent: Optional[ObWriteInternationalStandingOrder4DataInitiationCreditorAgent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAgent' }})
    currency_of_transfer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyOfTransfer' }})
    debtor_account: Optional[ObWriteInternationalStandingOrder4DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    destination_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationCountryCode' }})
    extended_purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtendedPurpose' }})
    final_payment_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_payment_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstPaymentDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    instructed_amount: ObWriteInternationalStandingOrder4DataInitiationInstructedAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    number_of_payments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfPayments' }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Purpose' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4Data:
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    initiation: ObWriteInternationalStandingOrder4DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    

@dataclass_json
@dataclass
class ObWriteInternationalStandingOrder4:
    data: ObWriteInternationalStandingOrder4Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    risk: obrisk1.ObRisk1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    
