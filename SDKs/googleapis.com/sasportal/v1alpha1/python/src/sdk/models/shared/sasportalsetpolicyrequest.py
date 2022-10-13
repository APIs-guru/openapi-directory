from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sasportalpolicy


@dataclass_json
@dataclass
class SasPortalSetPolicyRequest:
    disable_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableNotification' }})
    policy: Optional[sasportalpolicy.SasPortalPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    
