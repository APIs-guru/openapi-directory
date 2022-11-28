from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    TEXT_CLASSIFICATION = "TEXT_CLASSIFICATION"
    TEXT_ENTITY_EXTRACTION = "TEXT_ENTITY_EXTRACTION"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1LabelTextRequest:
    r"""GoogleCloudDatalabelingV1beta1LabelTextRequest
    Request message for LabelText.
    """
    
    basic_config: Optional[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicConfig') }})
    feature: Optional[GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feature') }})
    text_classification_config: Optional[GoogleCloudDatalabelingV1beta1TextClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textClassificationConfig') }})
    text_entity_extraction_config: Optional[GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textEntityExtractionConfig') }})
    
