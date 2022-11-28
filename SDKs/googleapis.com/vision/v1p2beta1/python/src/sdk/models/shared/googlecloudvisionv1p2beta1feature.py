from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudVisionV1p2beta1FeatureTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    FACE_DETECTION = "FACE_DETECTION"
    LANDMARK_DETECTION = "LANDMARK_DETECTION"
    LOGO_DETECTION = "LOGO_DETECTION"
    LABEL_DETECTION = "LABEL_DETECTION"
    TEXT_DETECTION = "TEXT_DETECTION"
    DOCUMENT_TEXT_DETECTION = "DOCUMENT_TEXT_DETECTION"
    SAFE_SEARCH_DETECTION = "SAFE_SEARCH_DETECTION"
    IMAGE_PROPERTIES = "IMAGE_PROPERTIES"
    CROP_HINTS = "CROP_HINTS"
    WEB_DETECTION = "WEB_DETECTION"
    PRODUCT_SEARCH = "PRODUCT_SEARCH"
    OBJECT_LOCALIZATION = "OBJECT_LOCALIZATION"


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1Feature:
    r"""GoogleCloudVisionV1p2beta1Feature
    The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
    """
    
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    type: Optional[GoogleCloudVisionV1p2beta1FeatureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
