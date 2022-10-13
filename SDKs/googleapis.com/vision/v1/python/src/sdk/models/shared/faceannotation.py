from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import boundingpoly
from . import boundingpoly
from . import landmark

class FaceAnnotationAngerLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class FaceAnnotationBlurredLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class FaceAnnotationHeadwearLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class FaceAnnotationJoyLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class FaceAnnotationSorrowLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class FaceAnnotationSurpriseLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class FaceAnnotationUnderExposedLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclass
class FaceAnnotation:
    anger_likelihood: Optional[FaceAnnotationAngerLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'angerLikelihood' }})
    blurred_likelihood: Optional[FaceAnnotationBlurredLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blurredLikelihood' }})
    bounding_poly: Optional[boundingpoly.BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    detection_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectionConfidence' }})
    fd_bounding_poly: Optional[boundingpoly.BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fdBoundingPoly' }})
    headwear_likelihood: Optional[FaceAnnotationHeadwearLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headwearLikelihood' }})
    joy_likelihood: Optional[FaceAnnotationJoyLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'joyLikelihood' }})
    landmarking_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'landmarkingConfidence' }})
    landmarks: Optional[List[landmark.Landmark]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'landmarks' }})
    pan_angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'panAngle' }})
    roll_angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollAngle' }})
    sorrow_likelihood: Optional[FaceAnnotationSorrowLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sorrowLikelihood' }})
    surprise_likelihood: Optional[FaceAnnotationSurpriseLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surpriseLikelihood' }})
    tilt_angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tiltAngle' }})
    under_exposed_likelihood: Optional[FaceAnnotationUnderExposedLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underExposedLikelihood' }})
    
