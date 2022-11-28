from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2SpConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2SpConfig
    The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
    """
    
    callback_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUri') }})
    sp_certificates: Optional[List[GoogleCloudIdentitytoolkitAdminV2SpCertificate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spCertificates') }})
    sp_entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spEntityId') }})
    

@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2SpConfigInput:
    r"""GoogleCloudIdentitytoolkitAdminV2SpConfigInput
    The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
    """
    
    callback_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUri') }})
    sp_entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spEntityId') }})
    
