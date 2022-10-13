from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnum(str, Enum):
    HTTPS_LATENCY_PROBLEM_UNSPECIFIED = "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
    FAILED_DNS_RESOLUTIONS = "FAILED_DNS_RESOLUTIONS"
    FAILED_HTTPS_REQUESTS = "FAILED_HTTPS_REQUESTS"
    HIGH_LATENCY = "HIGH_LATENCY"
    VERY_HIGH_LATENCY = "VERY_HIGH_LATENCY"


@dataclass_json
@dataclass
class GoogleChromeManagementV1HTTPSLatencyRoutineData:
    latency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latency' }})
    problem: Optional[GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'problem' }})
    
