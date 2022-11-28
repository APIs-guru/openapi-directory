from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ObjectTrackingConfig:
    r"""GoogleCloudDatalabelingV1beta1ObjectTrackingConfig
    Config for video object tracking human labeling task.
    """
    
    annotation_spec_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSet') }})
    clip_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clipLength') }})
    overlap_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overlapLength') }})
    
