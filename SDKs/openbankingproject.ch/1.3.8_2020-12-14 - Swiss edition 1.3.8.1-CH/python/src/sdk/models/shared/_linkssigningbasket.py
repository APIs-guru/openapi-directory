from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import hreftype
from . import hreftype
from . import hreftype
from . import hreftype
from . import hreftype
from . import hreftype
from . import hreftype
from . import hreftype
from . import hreftype
from . import hreftype


@dataclass_json
@dataclass
class LinksSigningBasket:
    sca_o_auth: Optional[hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaOAuth' }})
    sca_redirect: Optional[hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaRedirect' }})
    sca_status: Optional[hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaStatus' }})
    self: Optional[hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    start_authorisation: Optional[hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAuthorisation' }})
    start_authorisation_with_authentication_method_selection: Optional[hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAuthorisationWithAuthenticationMethodSelection' }})
    start_authorisation_with_encrypted_psu_authentication: Optional[hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAuthorisationWithEncryptedPsuAuthentication' }})
    start_authorisation_with_psu_authentication: Optional[hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAuthorisationWithPsuAuthentication' }})
    start_authorisation_with_psu_identification: Optional[hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAuthorisationWithPsuIdentification' }})
    start_authorisation_with_transaction_authorisation: Optional[hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAuthorisationWithTransactionAuthorisation' }})
    status: Optional[hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
