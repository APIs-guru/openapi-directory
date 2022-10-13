from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudMlV1SuggestTrialsRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    suggestion_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestionCount' }})
    
