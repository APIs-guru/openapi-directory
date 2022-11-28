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
class ObStatement2StatementAmount:
    r"""ObStatement2StatementAmount
    Set of elements used to provide details of a generic amount for the statement resource.
    """
    
    amount: ObActiveOrHistoricCurrencyAndAmount8 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    credit_debit_indicator: ObCreditDebitCode0Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditDebitIndicator') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class ObStatement2StatementBenefit:
    r"""ObStatement2StatementBenefit
    Set of elements used to provide details of a benefit or reward amount for the statement resource.
    """
    
    amount: ObActiveOrHistoricCurrencyAndAmount5 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class ObStatement2StatementDateTime:
    r"""ObStatement2StatementDateTime
    Set of elements used to provide details of a generic date time for the statement resource.
    """
    
    date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class ObStatement2StatementFee:
    r"""ObStatement2StatementFee
    Set of elements used to provide details of a fee for the statement resource.
    """
    
    amount: ObActiveOrHistoricCurrencyAndAmount6 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    credit_debit_indicator: ObCreditDebitCode0Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditDebitIndicator') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rate') }})
    rate_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateType') }})
    

@dataclass_json
@dataclass
class ObStatement2StatementInterest:
    r"""ObStatement2StatementInterest
    Set of elements used to provide details of a generic interest amount related to the statement resource.
    """
    
    amount: ObActiveOrHistoricCurrencyAndAmount7 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    credit_debit_indicator: ObCreditDebitCode0Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditDebitIndicator') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rate') }})
    rate_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateType') }})
    

@dataclass_json
@dataclass
class ObStatement2StatementRate:
    r"""ObStatement2StatementRate
    Set of elements used to provide details of a generic rate related to the statement resource.
    """
    
    rate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rate') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class ObStatement2StatementValue:
    r"""ObStatement2StatementValue
    Set of elements used to provide details of a generic number value related to the statement resource.
    """
    
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    

@dataclass_json
@dataclass
class ObStatement2:
    r"""ObStatement2
    Provides further details on a statement resource.
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: ObExternalStatementType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    statement_amount: Optional[List[ObStatement2StatementAmount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementAmount') }})
    statement_benefit: Optional[List[ObStatement2StatementBenefit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementBenefit') }})
    statement_date_time: Optional[List[ObStatement2StatementDateTime]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementDateTime') }})
    statement_description: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementDescription') }})
    statement_fee: Optional[List[ObStatement2StatementFee]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementFee') }})
    statement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementId') }})
    statement_interest: Optional[List[ObStatement2StatementInterest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementInterest') }})
    statement_rate: Optional[List[ObStatement2StatementRate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementRate') }})
    statement_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementReference') }})
    statement_value: Optional[List[ObStatement2StatementValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementValue') }})
    
