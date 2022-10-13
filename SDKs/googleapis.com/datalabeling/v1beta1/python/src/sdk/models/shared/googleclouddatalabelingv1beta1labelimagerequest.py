from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1humanannotationconfig
from . import googleclouddatalabelingv1beta1boundingpolyconfig
from . import googleclouddatalabelingv1beta1imageclassificationconfig
from . import googleclouddatalabelingv1beta1polylineconfig
from . import googleclouddatalabelingv1beta1segmentationconfig

class GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    CLASSIFICATION = "CLASSIFICATION"
    BOUNDING_BOX = "BOUNDING_BOX"
    ORIENTED_BOUNDING_BOX = "ORIENTED_BOUNDING_BOX"
    BOUNDING_POLY = "BOUNDING_POLY"
    POLYLINE = "POLYLINE"
    SEGMENTATION = "SEGMENTATION"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1LabelImageRequest:
    basic_config: Optional[googleclouddatalabelingv1beta1humanannotationconfig.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicConfig' }})
    bounding_poly_config: Optional[googleclouddatalabelingv1beta1boundingpolyconfig.GoogleCloudDatalabelingV1beta1BoundingPolyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPolyConfig' }})
    feature: Optional[GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feature' }})
    image_classification_config: Optional[googleclouddatalabelingv1beta1imageclassificationconfig.GoogleCloudDatalabelingV1beta1ImageClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageClassificationConfig' }})
    polyline_config: Optional[googleclouddatalabelingv1beta1polylineconfig.GoogleCloudDatalabelingV1beta1PolylineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'polylineConfig' }})
    segmentation_config: Optional[googleclouddatalabelingv1beta1segmentationconfig.GoogleCloudDatalabelingV1beta1SegmentationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentationConfig' }})
    
