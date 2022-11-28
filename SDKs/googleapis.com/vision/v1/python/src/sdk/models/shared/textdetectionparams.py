from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TextDetectionParams:
    r"""TextDetectionParams
    Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.
    """
    
    advanced_ocr_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advancedOcrOptions') }})
    enable_text_detection_confidence_score: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableTextDetectionConfidenceScore') }})
    
