from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRepricingRuleReportsResponse:
    r"""ListRepricingRuleReportsResponse
    Response message for the ListRepricingRuleReports method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    repricing_rule_reports: Optional[List[RepricingRuleReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repricingRuleReports') }})
    
