from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientsIDCertificatesAttrGeneratePathParams:
    attr: str = field(default=None, metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDCertificatesAttrGenerateRequest:
    path_params: PostRealmClientsIDCertificatesAttrGeneratePathParams = field(default=None)
    

@dataclass
class PostRealmClientsIDCertificatesAttrGenerateResponse:
    certificate_representation: Optional[shared.CertificateRepresentation] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
