from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1videothumbnail


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1VideoPayload:
    frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameRate' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    signed_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signedUri' }})
    video_thumbnails: Optional[List[googleclouddatalabelingv1beta1videothumbnail.GoogleCloudDatalabelingV1beta1VideoThumbnail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoThumbnails' }})
    video_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoUri' }})
    
