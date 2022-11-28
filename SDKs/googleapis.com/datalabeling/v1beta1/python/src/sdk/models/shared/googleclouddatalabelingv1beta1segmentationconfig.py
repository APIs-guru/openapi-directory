from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1SegmentationConfig:
    r"""GoogleCloudDatalabelingV1beta1SegmentationConfig
    Config for image segmentation
    """
    
    annotation_spec_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSet') }})
    instruction_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructionMessage') }})
    
