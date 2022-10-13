from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributescores


@dataclass_json
@dataclass
class AnalyzeCommentResponse:
    attribute_scores: Optional[dict[str, attributescores.AttributeScores]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeScores' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    detected_languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguages' }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    
