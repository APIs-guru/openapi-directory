from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HeldVoiceQueryCoveredDataEnum(str, Enum):
    COVERED_DATA_UNSPECIFIED = "COVERED_DATA_UNSPECIFIED"
    TEXT_MESSAGES = "TEXT_MESSAGES"
    VOICEMAILS = "VOICEMAILS"
    CALL_LOGS = "CALL_LOGS"


@dataclass_json
@dataclass
class HeldVoiceQuery:
    r"""HeldVoiceQuery
    Options for Voice holds.
    """
    
    covered_data: Optional[List[HeldVoiceQueryCoveredDataEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coveredData') }})
    
