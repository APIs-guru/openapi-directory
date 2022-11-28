from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMethodQuotasResponse:
    r"""ListMethodQuotasResponse
    Response message for the ListMethodQuotas method.
    """
    
    method_quotas: Optional[List[MethodQuota]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodQuotas') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
