from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CitiesDrillersListResponse:
    content_type: str = field()
    status_code: int = field()
    city_lists: Optional[List[shared.CityList]] = field(default=None)
    
