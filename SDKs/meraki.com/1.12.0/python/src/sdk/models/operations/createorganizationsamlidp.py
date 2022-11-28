from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateOrganizationSamlIdpPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateOrganizationSamlIdpRequestBody:
    x509cert_sha1_fingerprint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('x509certSha1Fingerprint') }})
    slo_logout_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sloLogoutUrl') }})
    

@dataclass
class CreateOrganizationSamlIdpRequest:
    path_params: CreateOrganizationSamlIdpPathParams = field()
    request: CreateOrganizationSamlIdpRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationSamlIdpResponse:
    content_type: str = field()
    status_code: int = field()
    create_organization_saml_idp_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
