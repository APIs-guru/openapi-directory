from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BrowseNearEarthObjectsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass
class BrowseNearEarthObjectsRequest:
    query_params: BrowseNearEarthObjectsQueryParams = field()
    

@dataclass
class BrowseNearEarthObjectsResponse:
    content_type: str = field()
    status_code: int = field()
    near_earth_object: Optional[shared.NearEarthObject] = field(default=None)
    
