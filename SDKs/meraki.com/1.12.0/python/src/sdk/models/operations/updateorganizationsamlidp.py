from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationSamlIdpPathParams:
    idp_id: str = field(default=None, metadata={'path_param': { 'field_name': 'idpId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationSamlIdpRequestBody:
    slo_logout_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sloLogoutUrl' }})
    x509cert_sha1_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x509certSha1Fingerprint' }})
    

@dataclass
class UpdateOrganizationSamlIdpRequest:
    path_params: UpdateOrganizationSamlIdpPathParams = field(default=None)
    request: Optional[UpdateOrganizationSamlIdpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationSamlIdpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_saml_idp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
