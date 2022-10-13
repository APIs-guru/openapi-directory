from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import actiondescription

class ListActionsResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class ListActionsResponse:
    api: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    response: List[actiondescription.ActionDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status: ListActionsResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
