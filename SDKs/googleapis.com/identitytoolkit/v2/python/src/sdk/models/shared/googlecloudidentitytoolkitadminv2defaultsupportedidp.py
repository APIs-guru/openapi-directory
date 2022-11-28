from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp:
    r"""GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp
    Standard Identity Toolkit-trusted IDPs.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    idp_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpId') }})
    
