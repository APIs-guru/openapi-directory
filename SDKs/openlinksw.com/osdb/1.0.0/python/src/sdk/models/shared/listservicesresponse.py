from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import servicedescription

class ListServicesResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class ListServicesResponse:
    api: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    response: List[servicedescription.ServiceDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status: ListServicesResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
