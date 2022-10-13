from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import standarderror
from . import subscriberemailresponse

class BatchResponseSubscriberEmailResponseStatusEnum(str, Enum):
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    CANCELED = "CANCELED"
    COMPLETE = "COMPLETE"


@dataclass_json
@dataclass
class BatchResponseSubscriberEmailResponse:
    completed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    errors: Optional[List[standarderror.StandardError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    links: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    num_errors: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numErrors' }})
    requested_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    results: List[subscriberemailresponse.SubscriberEmailResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    started_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: BatchResponseSubscriberEmailResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
