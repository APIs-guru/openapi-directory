from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PeopleGeoPeopleGeoGetQueryParams:
    lat: float = field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = field(metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.PersonIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class PeopleGeoPeopleGeoGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class PeopleGeoPeopleGeoGetRequest:
    headers: PeopleGeoPeopleGeoGetHeaders = field()
    query_params: PeopleGeoPeopleGeoGetQueryParams = field()
    

@dataclass
class PeopleGeoPeopleGeoGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    person_list: Optional[shared.PersonList] = field(default=None)
    
