from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateOrganizationSamlIdpPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateOrganizationSamlIdpRequestBody:
    slo_logout_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sloLogoutUrl' }})
    x509cert_sha1_fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x509certSha1Fingerprint' }})
    

@dataclass
class CreateOrganizationSamlIdpRequest:
    path_params: CreateOrganizationSamlIdpPathParams = field(default=None)
    request: CreateOrganizationSamlIdpRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationSamlIdpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_organization_saml_idp_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
