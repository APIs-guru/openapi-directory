from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import image

class ImageCreateResultStatusEnum(str, Enum):
    OK = "OK"
    OK_DUPLICATE = "OKDuplicate"
    ERROR_SOURCE = "ErrorSource"
    ERROR_IMAGE_FORMAT = "ErrorImageFormat"
    ERROR_IMAGE_SIZE = "ErrorImageSize"
    ERROR_STORAGE = "ErrorStorage"
    ERROR_LIMIT_EXCEED = "ErrorLimitExceed"
    ERROR_TAG_LIMIT_EXCEED = "ErrorTagLimitExceed"
    ERROR_REGION_LIMIT_EXCEED = "ErrorRegionLimitExceed"
    ERROR_UNKNOWN = "ErrorUnknown"


@dataclass_json
@dataclass
class ImageCreateResult:
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUrl' }})
    status: Optional[ImageCreateResultStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
