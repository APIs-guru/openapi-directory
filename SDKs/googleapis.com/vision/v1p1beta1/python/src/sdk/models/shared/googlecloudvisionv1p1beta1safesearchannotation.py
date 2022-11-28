from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1SafeSearchAnnotation:
    r"""GoogleCloudVisionV1p1beta1SafeSearchAnnotation
    Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
    """
    
    adult: Optional[GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adult') }})
    medical: Optional[GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medical') }})
    racy: Optional[GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('racy') }})
    spoof: Optional[GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spoof') }})
    violence: Optional[GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violence') }})
    
