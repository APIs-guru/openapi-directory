from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import repricingrulereport


@dataclass_json
@dataclass
class ListRepricingRuleReportsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    repricing_rule_reports: Optional[List[repricingrulereport.RepricingRuleReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repricingRuleReports' }})
    
