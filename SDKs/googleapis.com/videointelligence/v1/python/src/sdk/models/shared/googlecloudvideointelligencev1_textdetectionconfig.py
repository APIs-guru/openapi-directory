from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1TextDetectionConfig:
    language_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageHints' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    
