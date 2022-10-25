from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientsIDCertificatesAttrDownloadPathParams:
    attr: str = field(default=None, metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDCertificatesAttrDownloadRequest:
    path_params: PostRealmClientsIDCertificatesAttrDownloadPathParams = field(default=None)
    request: shared.KeyStoreConfig = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsIDCertificatesAttrDownloadResponse:
    content_type: str = field(default=None)
    post_realm_clients_id_certificates_attr_download_2_xx_application_octet_stream_byte_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
