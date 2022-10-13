from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum(str, Enum):
    MODEL_TYPE_UNSPECIFIED = "MODEL_TYPE_UNSPECIFIED"
    SMART_REPLY_DUAL_ENCODER_MODEL = "SMART_REPLY_DUAL_ENCODER_MODEL"
    SMART_REPLY_BERT_MODEL = "SMART_REPLY_BERT_MODEL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ArticleSuggestionModelMetadata:
    training_model_type: Optional[GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingModelType' }})
    
