from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnum(str, Enum):
    MODEL_TRAINING_MODE_UNSPECIFIED = "MODEL_TRAINING_MODE_UNSPECIFIED"
    MODEL_TRAINING_MODE_AUTOMATIC = "MODEL_TRAINING_MODE_AUTOMATIC"
    MODEL_TRAINING_MODE_MANUAL = "MODEL_TRAINING_MODE_MANUAL"

class GoogleCloudDialogflowCxV3NluSettingsModelTypeEnum(str, Enum):
    MODEL_TYPE_UNSPECIFIED = "MODEL_TYPE_UNSPECIFIED"
    MODEL_TYPE_STANDARD = "MODEL_TYPE_STANDARD"
    MODEL_TYPE_ADVANCED = "MODEL_TYPE_ADVANCED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3NluSettings:
    classification_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationThreshold' }})
    model_training_mode: Optional[GoogleCloudDialogflowCxV3NluSettingsModelTrainingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelTrainingMode' }})
    model_type: Optional[GoogleCloudDialogflowCxV3NluSettingsModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelType' }})
    
