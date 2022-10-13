from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ConsumerInfoTypeEnum(str, Enum):
    CONSUMER_TYPE_UNSPECIFIED = "CONSUMER_TYPE_UNSPECIFIED"
    PROJECT = "PROJECT"
    FOLDER = "FOLDER"
    ORGANIZATION = "ORGANIZATION"
    SERVICE_SPECIFIC = "SERVICE_SPECIFIC"


@dataclass_json
@dataclass
class ConsumerInfo:
    consumer_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerNumber' }})
    project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectNumber' }})
    type: Optional[ConsumerInfoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
