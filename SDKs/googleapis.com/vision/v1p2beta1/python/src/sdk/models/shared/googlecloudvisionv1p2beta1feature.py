from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    type: Optional[GoogleCloudVisionV1p2beta1FeatureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
