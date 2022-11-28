from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PeriodicPaymentInitiationWithStatusResponse:
    r"""PeriodicPaymentInitiationWithStatusResponse
    Generic JSON response body consistion of the corresponding periodic payment initation JSON body together with an optional transaction status field.
    
    """
    
    creditor_account: AccountReference16Ch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAccount') }})
    creditor_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorName') }})
    debtor_account: AccountReference16Ch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('debtorAccount') }})
    frequency: FrequencyCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    instructed_amount: Amount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructedAmount') }})
    start_date: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creditor_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAddress') }})
    creditor_agent: Optional[CreditorAgent7Ch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditorAgent') }})
    day_of_execution: Optional[DayOfExecutionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfExecution') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_to_end_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endToEndIdentification') }})
    execution_rule: Optional[ExecutionRuleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRule') }})
    purpose_code: Optional[PurposeCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purposeCode') }})
    remittance_information_structured: Optional[RemittanceInformationStructured] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationStructured') }})
    remittance_information_unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructured') }})
    remittance_information_unstructured_array: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remittanceInformationUnstructuredArray') }})
    requested_execution_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExecutionDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requested_execution_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExecutionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_status: Optional[TransactionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    ultimate_creditor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateCreditor') }})
    ultimate_debtor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ultimateDebtor') }})
    
