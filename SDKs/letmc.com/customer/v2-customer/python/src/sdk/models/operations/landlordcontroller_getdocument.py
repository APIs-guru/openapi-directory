from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class LandlordControllerGetDocumentPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetDocumentQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'ID', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetDocumentRequest:
    path_params: LandlordControllerGetDocumentPathParams = field(default=None)
    query_params: LandlordControllerGetDocumentQueryParams = field(default=None)
    

@dataclass
class LandlordControllerGetDocumentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
