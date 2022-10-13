from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1TextDetectionParams:
    advanced_ocr_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advancedOcrOptions' }})
    enable_text_detection_confidence_score: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableTextDetectionConfidenceScore' }})
    
