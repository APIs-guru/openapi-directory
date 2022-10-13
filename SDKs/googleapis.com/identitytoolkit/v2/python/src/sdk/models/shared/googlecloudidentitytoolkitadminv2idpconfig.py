from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2idpcertificate


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2IdpConfig:
    idp_certificates: Optional[List[googlecloudidentitytoolkitadminv2idpcertificate.GoogleCloudIdentitytoolkitAdminV2IdpCertificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idpCertificates' }})
    idp_entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idpEntityId' }})
    sign_request: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signRequest' }})
    sso_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssoUrl' }})
    
