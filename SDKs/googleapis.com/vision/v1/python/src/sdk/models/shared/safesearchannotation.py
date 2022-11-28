from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SafeSearchAnnotationAdultEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class SafeSearchAnnotationMedicalEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class SafeSearchAnnotationRacyEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class SafeSearchAnnotationSpoofEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class SafeSearchAnnotationViolenceEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclass
class SafeSearchAnnotation:
    r"""SafeSearchAnnotation
    Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
    """
    
    adult: Optional[SafeSearchAnnotationAdultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adult') }})
    medical: Optional[SafeSearchAnnotationMedicalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medical') }})
    racy: Optional[SafeSearchAnnotationRacyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('racy') }})
    spoof: Optional[SafeSearchAnnotationSpoofEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spoof') }})
    violence: Optional[SafeSearchAnnotationViolenceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violence') }})
    
