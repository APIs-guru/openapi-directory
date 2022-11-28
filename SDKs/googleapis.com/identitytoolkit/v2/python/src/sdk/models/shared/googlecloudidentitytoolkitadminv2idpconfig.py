from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2IdpConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2IdpConfig
    The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
    """
    
    idp_certificates: Optional[List[GoogleCloudIdentitytoolkitAdminV2IdpCertificate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpCertificates') }})
    idp_entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpEntityId') }})
    sign_request: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signRequest') }})
    sso_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssoUrl') }})
    
