from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchTenancyUnitsResponse:
    r"""SearchTenancyUnitsResponse
    Response for the search query.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tenancy_units: Optional[List[TenancyUnit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenancyUnits') }})
    
