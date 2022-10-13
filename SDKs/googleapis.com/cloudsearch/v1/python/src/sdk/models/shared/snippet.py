from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matchrange


@dataclass_json
@dataclass
class Snippet:
    match_ranges: Optional[List[matchrange.MatchRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchRanges' }})
    snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    
