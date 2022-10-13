from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAPIVVersionMetalsSpotSupportedPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionMetalsSpotSupportedQueryParams:
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionMetalsSpotSupportedRequest:
    path_params: GetAPIVVersionMetalsSpotSupportedPathParams = field(default=None)
    query_params: GetAPIVVersionMetalsSpotSupportedQueryParams = field(default=None)
    

@dataclass
class GetAPIVVersionMetalsSpotSupportedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_api_v_version_metals_spot_supported_200_application_json_strings: Optional[List[str]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
