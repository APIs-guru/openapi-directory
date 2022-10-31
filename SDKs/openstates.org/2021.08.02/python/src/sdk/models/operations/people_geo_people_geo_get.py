from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class PeopleGeoPeopleGeoGetQueryParams:
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.PersonIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    lat: float = field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = field(default=None, metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    

@dataclass
class PeopleGeoPeopleGeoGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class PeopleGeoPeopleGeoGetRequest:
    query_params: PeopleGeoPeopleGeoGetQueryParams = field(default=None)
    headers: PeopleGeoPeopleGeoGetHeaders = field(default=None)
    

@dataclass
class PeopleGeoPeopleGeoGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    person_list: Optional[shared.PersonList] = field(default=None)
    status_code: int = field(default=None)
    
