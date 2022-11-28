from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ObjectDetectionConfig:
    r"""GoogleCloudDatalabelingV1beta1ObjectDetectionConfig
    Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.
    """
    
    annotation_spec_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSet') }})
    extraction_frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractionFrameRate') }})
    
