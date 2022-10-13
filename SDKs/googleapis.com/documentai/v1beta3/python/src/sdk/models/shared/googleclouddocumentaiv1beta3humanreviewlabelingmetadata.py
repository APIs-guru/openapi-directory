from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3HumanReviewLabelingMetadata:
    enable_normalization_editing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableNormalizationEditing' }})
    
