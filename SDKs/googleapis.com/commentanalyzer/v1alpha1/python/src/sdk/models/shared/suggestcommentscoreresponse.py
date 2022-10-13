from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SuggestCommentScoreResponse:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    detected_languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguages' }})
    requested_languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedLanguages' }})
    
