from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import servicedescription

class DescribeServiceResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class DescribeServiceResponse:
    api: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    response: servicedescription.ServiceDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    status: DescribeServiceResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
