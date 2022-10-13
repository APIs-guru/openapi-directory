from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import repricingrule


@dataclass_json
@dataclass
class ListRepricingRulesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    repricing_rules: Optional[List[repricingrule.RepricingRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repricingRules' }})
    
