from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum(str, Enum):
    STRING_AGGREGATION_TYPE_UNSPECIFIED = "STRING_AGGREGATION_TYPE_UNSPECIFIED"
    MAJORITY_VOTE = "MAJORITY_VOTE"
    UNANIMOUS_VOTE = "UNANIMOUS_VOTE"
    NO_AGGREGATION = "NO_AGGREGATION"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ImageClassificationConfig:
    r"""GoogleCloudDatalabelingV1beta1ImageClassificationConfig
    Config for image classification human labeling task.
    """
    
    allow_multi_label: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMultiLabel') }})
    annotation_spec_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSet') }})
    answer_aggregation_type: Optional[GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerAggregationType') }})
    
