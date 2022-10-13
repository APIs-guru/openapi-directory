from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connection
from . import photoid
from . import place
from . import pose
from . import uploadref

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
class Photo:
    capture_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'captureTime' }})
    connections: Optional[List[connection.Connection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadUrl' }})
    maps_publish_status: Optional[PhotoMapsPublishStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapsPublishStatus' }})
    photo_id: Optional[photoid.PhotoID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoId' }})
    places: Optional[List[place.Place]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'places' }})
    pose: Optional[pose.Pose] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pose' }})
    share_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shareLink' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUrl' }})
    transfer_status: Optional[PhotoTransferStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferStatus' }})
    upload_reference: Optional[uploadref.UploadRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadReference' }})
    upload_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadTime' }})
    view_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewCount' }})
    
