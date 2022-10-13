from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotosuspensionauthpermissionsgaiaidentity
from . import enterprisecrmeventbusprotosuspensionauthpermissionsgaiaidentity


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoSuspensionAuthPermissions:
    gaia_identity: Optional[enterprisecrmeventbusprotosuspensionauthpermissionsgaiaidentity.EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gaiaIdentity' }})
    google_group: Optional[enterprisecrmeventbusprotosuspensionauthpermissionsgaiaidentity.EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleGroup' }})
    loas_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loasRole' }})
    mdb_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mdbGroup' }})
    
