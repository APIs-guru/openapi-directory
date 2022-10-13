from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class HeldVoiceQueryCoveredDataEnum(str, Enum):
    COVERED_DATA_UNSPECIFIED = "COVERED_DATA_UNSPECIFIED"
    TEXT_MESSAGES = "TEXT_MESSAGES"
    VOICEMAILS = "VOICEMAILS"
    CALL_LOGS = "CALL_LOGS"


@dataclass_json
@dataclass
class HeldVoiceQuery:
    covered_data: Optional[List[HeldVoiceQueryCoveredDataEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coveredData' }})
    
