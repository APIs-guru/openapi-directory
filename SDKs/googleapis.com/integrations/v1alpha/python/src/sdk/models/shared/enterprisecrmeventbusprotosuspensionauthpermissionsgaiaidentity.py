from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity:
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    gaia_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gaiaId' }})
    
