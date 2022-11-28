from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientsIDCertificatesAttrDownloadPathParams:
    attr: str = field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDCertificatesAttrDownloadRequest:
    path_params: PostRealmClientsIDCertificatesAttrDownloadPathParams = field()
    request: shared.KeyStoreConfig = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsIDCertificatesAttrDownloadResponse:
    content_type: str = field()
    status_code: int = field()
    post_realm_clients_id_certificates_attr_download_2_xx_application_octet_stream_byte_string: Optional[str] = field(default=None)
    
