from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1humanannotationconfig
from . import googleclouddatalabelingv1beta1textclassificationconfig
from . import googleclouddatalabelingv1beta1textentityextractionconfig

class GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    TEXT_CLASSIFICATION = "TEXT_CLASSIFICATION"
    TEXT_ENTITY_EXTRACTION = "TEXT_ENTITY_EXTRACTION"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1LabelTextRequest:
    basic_config: Optional[googleclouddatalabelingv1beta1humanannotationconfig.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicConfig' }})
    feature: Optional[GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feature' }})
    text_classification_config: Optional[googleclouddatalabelingv1beta1textclassificationconfig.GoogleCloudDatalabelingV1beta1TextClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textClassificationConfig' }})
    text_entity_extraction_config: Optional[googleclouddatalabelingv1beta1textentityextractionconfig.GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textEntityExtractionConfig' }})
    
