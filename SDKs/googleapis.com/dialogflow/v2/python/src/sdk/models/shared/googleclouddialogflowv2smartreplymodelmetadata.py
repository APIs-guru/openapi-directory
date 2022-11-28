from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2SmartReplyModelMetadataTrainingModelTypeEnum(str, Enum):
    MODEL_TYPE_UNSPECIFIED = "MODEL_TYPE_UNSPECIFIED"
    SMART_REPLY_DUAL_ENCODER_MODEL = "SMART_REPLY_DUAL_ENCODER_MODEL"
    SMART_REPLY_BERT_MODEL = "SMART_REPLY_BERT_MODEL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SmartReplyModelMetadata:
    r"""GoogleCloudDialogflowV2SmartReplyModelMetadata
    Metadata for smart reply models.
    """
    
    training_model_type: Optional[GoogleCloudDialogflowV2SmartReplyModelMetadataTrainingModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingModelType') }})
    
