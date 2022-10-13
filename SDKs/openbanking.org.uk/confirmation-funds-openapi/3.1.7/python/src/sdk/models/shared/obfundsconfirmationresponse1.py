from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import links
from . import meta


@dataclass_json
@dataclass
class ObFundsConfirmationResponse1DataInstructedAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObFundsConfirmationResponse1Data:
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    funds_available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FundsAvailable' }})
    funds_confirmation_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FundsConfirmationId' }})
    instructed_amount: ObFundsConfirmationResponse1DataInstructedAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    

@dataclass_json
@dataclass
class ObFundsConfirmationResponse1:
    data: ObFundsConfirmationResponse1Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
