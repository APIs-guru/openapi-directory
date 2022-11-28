from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConsumerInfoTypeEnum(str, Enum):
    CONSUMER_TYPE_UNSPECIFIED = "CONSUMER_TYPE_UNSPECIFIED"
    PROJECT = "PROJECT"
    FOLDER = "FOLDER"
    ORGANIZATION = "ORGANIZATION"
    SERVICE_SPECIFIC = "SERVICE_SPECIFIC"


@dataclass_json
@dataclass
class ConsumerInfo:
    r"""ConsumerInfo
    `ConsumerInfo` provides information about the consumer.
    """
    
    consumer_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerNumber') }})
    project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectNumber') }})
    type: Optional[ConsumerInfoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
