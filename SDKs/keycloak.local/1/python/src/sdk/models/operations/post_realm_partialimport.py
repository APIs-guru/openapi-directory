from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmPartialImportPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmPartialImportRequest:
    path_params: PostRealmPartialImportPathParams = field()
    request: shared.PartialImportRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmPartialImportResponse:
    content_type: str = field()
    status_code: int = field()
    
