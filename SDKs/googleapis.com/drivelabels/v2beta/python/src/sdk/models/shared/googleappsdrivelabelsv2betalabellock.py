from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betalabellockcapabilities
from . import googleappsdrivelabelsv2betauserinfo

class GoogleAppsDriveLabelsV2betaLabelLockStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLabelLock:
    capabilities: Optional[googleappsdrivelabelsv2betalabellockcapabilities.GoogleAppsDriveLabelsV2betaLabelLockCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    choice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'choiceId' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policy_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyUri' }})
    state: Optional[GoogleAppsDriveLabelsV2betaLabelLockStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
