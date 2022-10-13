from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmPartialImportPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmPartialImportRequest:
    path_params: PostRealmPartialImportPathParams = field(default=None)
    request: shared.PartialImportRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmPartialImportResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
