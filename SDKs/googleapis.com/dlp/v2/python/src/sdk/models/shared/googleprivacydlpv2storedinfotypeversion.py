from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2storedinfotypeconfig
from . import googleprivacydlpv2error
from . import googleprivacydlpv2storedinfotypestats

class GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum(str, Enum):
    STORED_INFO_TYPE_STATE_UNSPECIFIED = "STORED_INFO_TYPE_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"
    INVALID = "INVALID"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2StoredInfoTypeVersion:
    config: Optional[googleprivacydlpv2storedinfotypeconfig.GooglePrivacyDlpV2StoredInfoTypeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    errors: Optional[List[googleprivacydlpv2error.GooglePrivacyDlpV2Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    state: Optional[GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    stats: Optional[googleprivacydlpv2storedinfotypestats.GooglePrivacyDlpV2StoredInfoTypeStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
