from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRepricingRulesResponse:
    r"""ListRepricingRulesResponse
    Response message for the `ListRepricingRules` method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    repricing_rules: Optional[List[RepricingRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repricingRules') }})
    
