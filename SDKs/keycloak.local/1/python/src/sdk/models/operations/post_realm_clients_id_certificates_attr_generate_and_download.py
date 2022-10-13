from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmClientsIDCertificatesAttrGenerateAndDownloadPathParams:
    attr: str = field(default=None, metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDCertificatesAttrGenerateAndDownloadRequest:
    path_params: PostRealmClientsIDCertificatesAttrGenerateAndDownloadPathParams = field(default=None)
    request: shared.KeyStoreConfig = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsIDCertificatesAttrGenerateAndDownloadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
