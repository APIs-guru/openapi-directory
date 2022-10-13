from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import planninglevelhyperparameterresponse

class PlanningLevelInfoResponseStatusEnum(str, Enum):
    UNPROCCESSED = "Unproccessed"
    RUNNING = "Running"
    COMPLETE = "Complete"
    FAILED = "Failed"


@dataclass_json
@dataclass
class PlanningLevelInfoResponse:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    hyperparameters: Optional[planninglevelhyperparameterresponse.PlanningLevelHyperparameterResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperparameters' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    no_timeseries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noTimeseries' }})
    status: Optional[PlanningLevelInfoResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
