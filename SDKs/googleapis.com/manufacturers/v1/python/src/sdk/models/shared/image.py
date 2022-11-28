from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ImageStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    PENDING_PROCESSING = "PENDING_PROCESSING"
    PENDING_CRAWL = "PENDING_CRAWL"
    OK = "OK"
    ROBOTED = "ROBOTED"
    XROBOTED = "XROBOTED"
    CRAWL_ERROR = "CRAWL_ERROR"
    PROCESSING_ERROR = "PROCESSING_ERROR"
    DECODING_ERROR = "DECODING_ERROR"
    TOO_BIG = "TOO_BIG"
    CRAWL_SKIPPED = "CRAWL_SKIPPED"
    HOSTLOADED = "HOSTLOADED"
    HTTP_404 = "HTTP_404"

class ImageTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CRAWLED = "CRAWLED"
    UPLOADED = "UPLOADED"


@dataclass_json
@dataclass
class Image:
    r"""Image
    An image.
    """
    
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    status: Optional[ImageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
