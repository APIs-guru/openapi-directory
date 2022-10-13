from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tenancyunit


@dataclass_json
@dataclass
class SearchTenancyUnitsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tenancy_units: Optional[List[tenancyunit.TenancyUnit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenancyUnits' }})
    
