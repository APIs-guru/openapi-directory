from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ImportResponseStateEnum(str, Enum):
    IMPORTING = "IMPORTING"
    FINISHED_SUCCESS = "FINISHED_SUCCESS"
    FINISHED_FAILED = "FINISHED_FAILED"


@dataclass_json
@dataclass
class ImportResponse:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    finished: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finished', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    state: Optional[ImportResponseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    
