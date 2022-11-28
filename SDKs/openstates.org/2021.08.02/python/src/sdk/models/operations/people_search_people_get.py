from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PeopleSearchPeopleGetQueryParams:
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    district: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.PersonIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    jurisdiction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    org_classification: Optional[shared.OrgClassificationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'org_classification', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class PeopleSearchPeopleGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class PeopleSearchPeopleGetRequest:
    headers: PeopleSearchPeopleGetHeaders = field()
    query_params: PeopleSearchPeopleGetQueryParams = field()
    

@dataclass
class PeopleSearchPeopleGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    person_list: Optional[shared.PersonList] = field(default=None)
    
