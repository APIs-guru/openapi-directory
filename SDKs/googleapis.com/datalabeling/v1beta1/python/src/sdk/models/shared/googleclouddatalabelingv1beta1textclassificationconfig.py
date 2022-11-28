from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1TextClassificationConfig:
    r"""GoogleCloudDatalabelingV1beta1TextClassificationConfig
    Config for text classification human labeling task.
    """
    
    allow_multi_label: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMultiLabel') }})
    annotation_spec_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSet') }})
    sentiment_config: Optional[GoogleCloudDatalabelingV1beta1SentimentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentConfig') }})
    
