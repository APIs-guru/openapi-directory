from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3HumanReviewValidationMetadata:
    confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceThreshold' }})
    enable_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableValidation' }})
    
