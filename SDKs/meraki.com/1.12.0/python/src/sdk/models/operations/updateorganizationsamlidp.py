from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationSamlIdpPathParams:
    idp_id: str = field(metadata={'path_param': { 'field_name': 'idpId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationSamlIdpRequestBody:
    slo_logout_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sloLogoutUrl') }})
    x509cert_sha1_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x509certSha1Fingerprint') }})
    

@dataclass
class UpdateOrganizationSamlIdpRequest:
    path_params: UpdateOrganizationSamlIdpPathParams = field()
    request: Optional[UpdateOrganizationSamlIdpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationSamlIdpResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_saml_idp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
