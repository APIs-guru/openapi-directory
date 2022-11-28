from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1ImageContext:
    r"""GoogleCloudVisionV1p1beta1ImageContext
    Image context and/or feature-specific parameters.
    """
    
    crop_hints_params: Optional[GoogleCloudVisionV1p1beta1CropHintsParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropHintsParams') }})
    language_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageHints') }})
    lat_long_rect: Optional[GoogleCloudVisionV1p1beta1LatLongRect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latLongRect') }})
    product_search_params: Optional[GoogleCloudVisionV1p1beta1ProductSearchParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSearchParams') }})
    text_detection_params: Optional[GoogleCloudVisionV1p1beta1TextDetectionParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textDetectionParams') }})
    web_detection_params: Optional[GoogleCloudVisionV1p1beta1WebDetectionParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webDetectionParams') }})
    
