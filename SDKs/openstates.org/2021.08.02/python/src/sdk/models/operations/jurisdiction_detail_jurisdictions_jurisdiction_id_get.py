from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class JurisdictionDetailJurisdictionsJurisdictionIDGetPathParams:
    jurisdiction_id: str = field(metadata={'path_param': { 'field_name': 'jurisdiction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class JurisdictionDetailJurisdictionsJurisdictionIDGetQueryParams:
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.JurisdictionIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class JurisdictionDetailJurisdictionsJurisdictionIDGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class JurisdictionDetailJurisdictionsJurisdictionIDGetRequest:
    headers: JurisdictionDetailJurisdictionsJurisdictionIDGetHeaders = field()
    path_params: JurisdictionDetailJurisdictionsJurisdictionIDGetPathParams = field()
    query_params: JurisdictionDetailJurisdictionsJurisdictionIDGetQueryParams = field()
    

@dataclass
class JurisdictionDetailJurisdictionsJurisdictionIDGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    jurisdiction: Optional[shared.Jurisdiction] = field(default=None)
    
