from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class JurisdictionListJurisdictionsGetQueryParams:
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    classification: Optional[shared.JurisdictionClassificationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'classification', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.JurisdictionIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class JurisdictionListJurisdictionsGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class JurisdictionListJurisdictionsGetRequest:
    query_params: JurisdictionListJurisdictionsGetQueryParams = field(default=None)
    headers: JurisdictionListJurisdictionsGetHeaders = field(default=None)
    

@dataclass
class JurisdictionListJurisdictionsGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    jurisdiction_list: Optional[shared.JurisdictionList] = field(default=None)
    status_code: int = field(default=None)
    
