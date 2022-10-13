from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1crophintsparams
from . import googlecloudvisionv1p1beta1latlongrect
from . import googlecloudvisionv1p1beta1productsearchparams
from . import googlecloudvisionv1p1beta1textdetectionparams
from . import googlecloudvisionv1p1beta1webdetectionparams


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1ImageContext:
    crop_hints_params: Optional[googlecloudvisionv1p1beta1crophintsparams.GoogleCloudVisionV1p1beta1CropHintsParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cropHintsParams' }})
    language_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageHints' }})
    lat_long_rect: Optional[googlecloudvisionv1p1beta1latlongrect.GoogleCloudVisionV1p1beta1LatLongRect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latLongRect' }})
    product_search_params: Optional[googlecloudvisionv1p1beta1productsearchparams.GoogleCloudVisionV1p1beta1ProductSearchParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productSearchParams' }})
    text_detection_params: Optional[googlecloudvisionv1p1beta1textdetectionparams.GoogleCloudVisionV1p1beta1TextDetectionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textDetectionParams' }})
    web_detection_params: Optional[googlecloudvisionv1p1beta1webdetectionparams.GoogleCloudVisionV1p1beta1WebDetectionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webDetectionParams' }})
    
