from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDCertificatesAttrPathParams:
    attr: str = field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDCertificatesAttrRequest:
    path_params: GetRealmClientsIDCertificatesAttrPathParams = field()
    

@dataclass
class GetRealmClientsIDCertificatesAttrResponse:
    content_type: str = field()
    status_code: int = field()
    certificate_representation: Optional[shared.CertificateRepresentation] = field(default=None)
    
