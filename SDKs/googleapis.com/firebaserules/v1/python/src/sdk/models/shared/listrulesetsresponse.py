from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ruleset


@dataclass_json
@dataclass
class ListRulesetsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    rulesets: Optional[List[ruleset.Ruleset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesets' }})
    
