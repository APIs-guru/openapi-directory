from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DomainCallEvidence:
    r"""DomainCallEvidence
    Number of HTTP calls made by a creative, broken down by domain.
    """
    
    top_http_call_domains: Optional[List[DomainCalls]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topHttpCallDomains') }})
    total_http_call_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalHttpCallCount') }})
    
