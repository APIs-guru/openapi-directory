from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1webdetectionwebimage
from . import googlecloudvisionv1p1beta1webdetectionwebimage


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1WebDetectionWebPage:
    full_matching_images: Optional[List[googlecloudvisionv1p1beta1webdetectionwebimage.GoogleCloudVisionV1p1beta1WebDetectionWebImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullMatchingImages' }})
    page_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageTitle' }})
    partial_matching_images: Optional[List[googlecloudvisionv1p1beta1webdetectionwebimage.GoogleCloudVisionV1p1beta1WebDetectionWebImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partialMatchingImages' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
