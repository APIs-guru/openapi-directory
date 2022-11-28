from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum(str, Enum):
    STORED_INFO_TYPE_STATE_UNSPECIFIED = "STORED_INFO_TYPE_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"
    INVALID = "INVALID"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2StoredInfoTypeVersion:
    r"""GooglePrivacyDlpV2StoredInfoTypeVersion
    Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.
    """
    
    config: Optional[GooglePrivacyDlpV2StoredInfoTypeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    errors: Optional[List[GooglePrivacyDlpV2Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    state: Optional[GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    stats: Optional[GooglePrivacyDlpV2StoredInfoTypeStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
