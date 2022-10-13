from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BrowseNearEarthObjectsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass
class BrowseNearEarthObjectsRequest:
    query_params: BrowseNearEarthObjectsQueryParams = field(default=None)
    

@dataclass
class BrowseNearEarthObjectsResponse:
    content_type: str = field(default=None)
    near_earth_object: Optional[shared.NearEarthObject] = field(default=None)
    status_code: int = field(default=None)
    
