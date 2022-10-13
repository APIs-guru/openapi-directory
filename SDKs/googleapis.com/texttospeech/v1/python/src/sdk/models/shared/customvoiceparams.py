from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CustomVoiceParamsReportedUsageEnum(str, Enum):
    REPORTED_USAGE_UNSPECIFIED = "REPORTED_USAGE_UNSPECIFIED"
    REALTIME = "REALTIME"
    OFFLINE = "OFFLINE"


@dataclass_json
@dataclass
class CustomVoiceParams:
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    reported_usage: Optional[CustomVoiceParamsReportedUsageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportedUsage' }})
    
