from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1VideoClassificationConfig:
    r"""GoogleCloudDatalabelingV1beta1VideoClassificationConfig
    Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.
    """
    
    annotation_spec_set_configs: Optional[List[GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSetConfigs') }})
    apply_shot_detection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyShotDetection') }})
    
