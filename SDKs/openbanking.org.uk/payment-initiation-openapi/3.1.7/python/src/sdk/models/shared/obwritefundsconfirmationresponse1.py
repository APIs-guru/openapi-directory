from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import links
from . import meta


@dataclass_json
@dataclass
class ObWriteFundsConfirmationResponse1DataFundsAvailableResult:
    funds_available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FundsAvailable' }})
    funds_available_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FundsAvailableDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteFundsConfirmationResponse1Data:
    funds_available_result: Optional[ObWriteFundsConfirmationResponse1DataFundsAvailableResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FundsAvailableResult' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    

@dataclass_json
@dataclass
class ObWriteFundsConfirmationResponse1:
    data: ObWriteFundsConfirmationResponse1Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
