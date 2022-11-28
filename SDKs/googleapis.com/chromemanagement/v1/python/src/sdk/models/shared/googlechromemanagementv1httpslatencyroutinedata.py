from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnum(str, Enum):
    HTTPS_LATENCY_PROBLEM_UNSPECIFIED = "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
    FAILED_DNS_RESOLUTIONS = "FAILED_DNS_RESOLUTIONS"
    FAILED_HTTPS_REQUESTS = "FAILED_HTTPS_REQUESTS"
    HIGH_LATENCY = "HIGH_LATENCY"
    VERY_HIGH_LATENCY = "VERY_HIGH_LATENCY"


@dataclass_json
@dataclass
class GoogleChromeManagementV1HTTPSLatencyRoutineData:
    r"""GoogleChromeManagementV1HTTPSLatencyRoutineData
    Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.
    """
    
    latency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    problem: Optional[GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('problem') }})
    
