from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1PublicationTypesQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1PublicationTypesRequest:
    query_params: GetAPIV1PublicationTypesQueryParams = field()
    

@dataclass
class GetAPIV1PublicationTypesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    publication_type_search_result: Optional[shared.PublicationTypeSearchResult] = field(default=None)
    
