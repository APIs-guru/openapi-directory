from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1webdetectionweblabel
from . import googlecloudvisionv1p1beta1webdetectionwebimage
from . import googlecloudvisionv1p1beta1webdetectionwebpage
from . import googlecloudvisionv1p1beta1webdetectionwebimage
from . import googlecloudvisionv1p1beta1webdetectionwebimage
from . import googlecloudvisionv1p1beta1webdetectionwebentity


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1WebDetection:
    best_guess_labels: Optional[List[googlecloudvisionv1p1beta1webdetectionweblabel.GoogleCloudVisionV1p1beta1WebDetectionWebLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bestGuessLabels' }})
    full_matching_images: Optional[List[googlecloudvisionv1p1beta1webdetectionwebimage.GoogleCloudVisionV1p1beta1WebDetectionWebImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullMatchingImages' }})
    pages_with_matching_images: Optional[List[googlecloudvisionv1p1beta1webdetectionwebpage.GoogleCloudVisionV1p1beta1WebDetectionWebPage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagesWithMatchingImages' }})
    partial_matching_images: Optional[List[googlecloudvisionv1p1beta1webdetectionwebimage.GoogleCloudVisionV1p1beta1WebDetectionWebImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partialMatchingImages' }})
    visually_similar_images: Optional[List[googlecloudvisionv1p1beta1webdetectionwebimage.GoogleCloudVisionV1p1beta1WebDetectionWebImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visuallySimilarImages' }})
    web_entities: Optional[List[googlecloudvisionv1p1beta1webdetectionwebentity.GoogleCloudVisionV1p1beta1WebDetectionWebEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webEntities' }})
    
