from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import actiondescription

class DescribeActionResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class DescribeActionResponse:
    api: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    response: actiondescription.ActionDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status: DescribeActionResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
