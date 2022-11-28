from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetConsumerV1CustomersCountriesResponse:
    content_type: str = field()
    status_code: int = field()
    country_view_models: Optional[List[shared.CountryViewModel]] = field(default=None)
    
