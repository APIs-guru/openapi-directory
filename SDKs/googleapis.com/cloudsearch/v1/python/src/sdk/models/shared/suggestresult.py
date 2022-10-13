from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import peoplesuggestion
from . import source


@dataclass_json
@dataclass
class SuggestResult:
    people_suggestion: Optional[peoplesuggestion.PeopleSuggestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peopleSuggestion' }})
    query_suggestion: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'querySuggestion' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    suggested_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedQuery' }})
    
