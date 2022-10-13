from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CitiesInstallersListResponse:
    city_lists: Optional[List[shared.CityList]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
