from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotation
from . import googleclouddatalabelingv1beta1imagepayload
from . import googleclouddatalabelingv1beta1textpayload
from . import googleclouddatalabelingv1beta1videopayload


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1Example:
    annotations: Optional[List[googleclouddatalabelingv1beta1annotation.GoogleCloudDatalabelingV1beta1Annotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    image_payload: Optional[googleclouddatalabelingv1beta1imagepayload.GoogleCloudDatalabelingV1beta1ImagePayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePayload' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    text_payload: Optional[googleclouddatalabelingv1beta1textpayload.GoogleCloudDatalabelingV1beta1TextPayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textPayload' }})
    video_payload: Optional[googleclouddatalabelingv1beta1videopayload.GoogleCloudDatalabelingV1beta1VideoPayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoPayload' }})
    
