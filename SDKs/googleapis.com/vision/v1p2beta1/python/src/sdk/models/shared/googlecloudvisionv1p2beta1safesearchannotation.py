from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudVisionV1p2beta1SafeSearchAnnotationAdultEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p2beta1SafeSearchAnnotationMedicalEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p2beta1SafeSearchAnnotationRacyEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p2beta1SafeSearchAnnotationSpoofEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p2beta1SafeSearchAnnotationViolenceEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1SafeSearchAnnotation:
    adult: Optional[GoogleCloudVisionV1p2beta1SafeSearchAnnotationAdultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adult' }})
    medical: Optional[GoogleCloudVisionV1p2beta1SafeSearchAnnotationMedicalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medical' }})
    racy: Optional[GoogleCloudVisionV1p2beta1SafeSearchAnnotationRacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'racy' }})
    spoof: Optional[GoogleCloudVisionV1p2beta1SafeSearchAnnotationSpoofEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spoof' }})
    violence: Optional[GoogleCloudVisionV1p2beta1SafeSearchAnnotationViolenceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violence' }})
    
