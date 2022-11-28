from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudChannelV1MediaTypeEnum(str, Enum):
    MEDIA_TYPE_UNSPECIFIED = "MEDIA_TYPE_UNSPECIFIED"
    MEDIA_TYPE_IMAGE = "MEDIA_TYPE_IMAGE"


@dataclass_json
@dataclass
class GoogleCloudChannelV1Media:
    r"""GoogleCloudChannelV1Media
    Represents media information.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[GoogleCloudChannelV1MediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
