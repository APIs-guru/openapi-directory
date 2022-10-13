from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotonotification
from . import enterprisecrmeventbusprotosuspensionexpiration
from . import enterprisecrmeventbusprotosuspensionauthpermissions


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoSuspensionConfig:
    custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMessage' }})
    notifications: Optional[List[enterprisecrmeventbusprotonotification.EnterpriseCrmEventbusProtoNotification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    suspension_expiration: Optional[enterprisecrmeventbusprotosuspensionexpiration.EnterpriseCrmEventbusProtoSuspensionExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspensionExpiration' }})
    who_may_resolve: Optional[List[enterprisecrmeventbusprotosuspensionauthpermissions.EnterpriseCrmEventbusProtoSuspensionAuthPermissions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'whoMayResolve' }})
    
