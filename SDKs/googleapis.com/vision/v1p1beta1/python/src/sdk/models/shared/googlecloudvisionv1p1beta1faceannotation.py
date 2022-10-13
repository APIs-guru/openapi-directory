from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1boundingpoly
from . import googlecloudvisionv1p1beta1boundingpoly
from . import googlecloudvisionv1p1beta1faceannotationlandmark

class GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"

class GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1FaceAnnotation:
    anger_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationAngerLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'angerLikelihood' }})
    blurred_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationBlurredLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blurredLikelihood' }})
    bounding_poly: Optional[googlecloudvisionv1p1beta1boundingpoly.GoogleCloudVisionV1p1beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    detection_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectionConfidence' }})
    fd_bounding_poly: Optional[googlecloudvisionv1p1beta1boundingpoly.GoogleCloudVisionV1p1beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fdBoundingPoly' }})
    headwear_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationHeadwearLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headwearLikelihood' }})
    joy_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationJoyLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'joyLikelihood' }})
    landmarking_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'landmarkingConfidence' }})
    landmarks: Optional[List[googlecloudvisionv1p1beta1faceannotationlandmark.GoogleCloudVisionV1p1beta1FaceAnnotationLandmark]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'landmarks' }})
    pan_angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'panAngle' }})
    roll_angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollAngle' }})
    sorrow_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationSorrowLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sorrowLikelihood' }})
    surprise_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationSurpriseLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surpriseLikelihood' }})
    tilt_angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tiltAngle' }})
    under_exposed_likelihood: Optional[GoogleCloudVisionV1p1beta1FaceAnnotationUnderExposedLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underExposedLikelihood' }})
    
