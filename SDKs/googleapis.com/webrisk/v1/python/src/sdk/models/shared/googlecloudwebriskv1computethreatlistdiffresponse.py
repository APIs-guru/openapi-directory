from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum(str, Enum):
    RESPONSE_TYPE_UNSPECIFIED = "RESPONSE_TYPE_UNSPECIFIED"
    DIFF = "DIFF"
    RESET = "RESET"


@dataclass_json
@dataclass
class GoogleCloudWebriskV1ComputeThreatListDiffResponse:
    additions: Optional[GoogleCloudWebriskV1ThreatEntryAdditions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additions') }})
    checksum: Optional[GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    new_version_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newVersionToken') }})
    recommended_next_diff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedNextDiff') }})
    removals: Optional[GoogleCloudWebriskV1ThreatEntryRemovals] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removals') }})
    response_type: Optional[GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseType') }})
    
