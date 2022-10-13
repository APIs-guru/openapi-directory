from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestionFaqAnswer:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer' }})
    answer_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerRecord' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'question' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
