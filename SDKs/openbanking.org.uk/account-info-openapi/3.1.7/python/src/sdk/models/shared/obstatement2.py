from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obactiveorhistoriccurrencyandamount_8
from . import obcreditdebitcode_0_enum
from . import obactiveorhistoriccurrencyandamount_5
from . import obactiveorhistoriccurrencyandamount_6
from . import obcreditdebitcode_0_enum
from . import obactiveorhistoriccurrencyandamount_7
from . import obcreditdebitcode_0_enum
from . import obexternalstatementtype1code_enum


@dataclass_json
@dataclass
class ObStatement2StatementAmount:
    amount: obactiveorhistoriccurrencyandamount_8.ObActiveOrHistoricCurrencyAndAmount8 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    credit_debit_indicator: obcreditdebitcode_0_enum.ObCreditDebitCode0Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditDebitIndicator' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObStatement2StatementBenefit:
    amount: obactiveorhistoriccurrencyandamount_5.ObActiveOrHistoricCurrencyAndAmount5 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObStatement2StatementDateTime:
    date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObStatement2StatementFee:
    amount: obactiveorhistoriccurrencyandamount_6.ObActiveOrHistoricCurrencyAndAmount6 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    credit_debit_indicator: obcreditdebitcode_0_enum.ObCreditDebitCode0Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditDebitIndicator' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rate' }})
    rate_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateType' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObStatement2StatementInterest:
    amount: obactiveorhistoriccurrencyandamount_7.ObActiveOrHistoricCurrencyAndAmount7 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    credit_debit_indicator: obcreditdebitcode_0_enum.ObCreditDebitCode0Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditDebitIndicator' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rate' }})
    rate_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateType' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObStatement2StatementRate:
    rate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rate' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObStatement2StatementValue:
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    

@dataclass_json
@dataclass
class ObStatement2:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    statement_amount: Optional[List[ObStatement2StatementAmount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementAmount' }})
    statement_benefit: Optional[List[ObStatement2StatementBenefit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementBenefit' }})
    statement_date_time: Optional[List[ObStatement2StatementDateTime]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementDateTime' }})
    statement_description: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementDescription' }})
    statement_fee: Optional[List[ObStatement2StatementFee]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementFee' }})
    statement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementId' }})
    statement_interest: Optional[List[ObStatement2StatementInterest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementInterest' }})
    statement_rate: Optional[List[ObStatement2StatementRate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementRate' }})
    statement_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementReference' }})
    statement_value: Optional[List[ObStatement2StatementValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementValue' }})
    type: obexternalstatementtype1code_enum.ObExternalStatementType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
