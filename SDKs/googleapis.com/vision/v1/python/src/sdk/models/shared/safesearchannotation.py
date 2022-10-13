from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    adult: Optional[SafeSearchAnnotationAdultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adult' }})
    medical: Optional[SafeSearchAnnotationMedicalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medical' }})
    racy: Optional[SafeSearchAnnotationRacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'racy' }})
    spoof: Optional[SafeSearchAnnotationSpoofEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spoof' }})
    violence: Optional[SafeSearchAnnotationViolenceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violence' }})
    
