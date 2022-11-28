from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum(str, Enum):
    MODEL_TRAINING_MODE_UNSPECIFIED = "MODEL_TRAINING_MODE_UNSPECIFIED"
    MODEL_TRAINING_MODE_AUTOMATIC = "MODEL_TRAINING_MODE_AUTOMATIC"
    MODEL_TRAINING_MODE_MANUAL = "MODEL_TRAINING_MODE_MANUAL"

class GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum(str, Enum):
    MODEL_TYPE_UNSPECIFIED = "MODEL_TYPE_UNSPECIFIED"
    MODEL_TYPE_STANDARD = "MODEL_TYPE_STANDARD"
    MODEL_TYPE_ADVANCED = "MODEL_TYPE_ADVANCED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1NluSettings:
    r"""GoogleCloudDialogflowCxV3beta1NluSettings
    Settings related to NLU.
    """
    
    classification_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationThreshold') }})
    model_training_mode: Optional[GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelTrainingMode') }})
    model_type: Optional[GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelType') }})
    
