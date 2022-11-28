from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoSuspensionAuthPermissions:
    r"""EnterpriseCrmEventbusProtoSuspensionAuthPermissions
    LINT.IfChange
    """
    
    gaia_identity: Optional[EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gaiaIdentity') }})
    google_group: Optional[EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleGroup') }})
    loas_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loasRole') }})
    mdb_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mdbGroup') }})
    
