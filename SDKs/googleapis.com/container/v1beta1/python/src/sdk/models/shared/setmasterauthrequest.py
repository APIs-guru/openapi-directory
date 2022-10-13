from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import masterauth

class SetMasterAuthRequestActionEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    SET_PASSWORD = "SET_PASSWORD"
    GENERATE_PASSWORD = "GENERATE_PASSWORD"
    SET_USERNAME = "SET_USERNAME"


@dataclass_json
@dataclass
class SetMasterAuthRequest:
    action: Optional[SetMasterAuthRequestActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    update: Optional[masterauth.MasterAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
