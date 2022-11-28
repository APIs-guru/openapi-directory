from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PhotoMapsPublishStatusEnum(str, Enum):
    UNSPECIFIED_MAPS_PUBLISH_STATUS = "UNSPECIFIED_MAPS_PUBLISH_STATUS"
    PUBLISHED = "PUBLISHED"
    REJECTED_UNKNOWN = "REJECTED_UNKNOWN"

class PhotoTransferStatusEnum(str, Enum):
    TRANSFER_STATUS_UNKNOWN = "TRANSFER_STATUS_UNKNOWN"
    NEVER_TRANSFERRED = "NEVER_TRANSFERRED"
    PENDING = "PENDING"
    COMPLETED = "COMPLETED"
    REJECTED = "REJECTED"
    EXPIRED = "EXPIRED"
    CANCELLED = "CANCELLED"
    RECEIVED_VIA_TRANSFER = "RECEIVED_VIA_TRANSFER"


@dataclass_json
@dataclass
class PhotoInput:
    r"""PhotoInput
    Photo is used to store 360 photos along with photo metadata.
    """
    
    capture_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captureTime') }})
    connections: Optional[List[Connection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    photo_id: Optional[PhotoID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoId') }})
    places: Optional[List[PlaceInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('places') }})
    pose: Optional[Pose] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pose') }})
    upload_reference: Optional[UploadRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadReference') }})
    

@dataclass_json
@dataclass
class Photo:
    r"""Photo
    Photo is used to store 360 photos along with photo metadata.
    """
    
    capture_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captureTime') }})
    connections: Optional[List[Connection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadUrl') }})
    maps_publish_status: Optional[PhotoMapsPublishStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapsPublishStatus') }})
    photo_id: Optional[PhotoID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoId') }})
    places: Optional[List[Place]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('places') }})
    pose: Optional[Pose] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pose') }})
    share_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareLink') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    transfer_status: Optional[PhotoTransferStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferStatus') }})
    upload_reference: Optional[UploadRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadReference') }})
    upload_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadTime') }})
    view_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewCount') }})
    
