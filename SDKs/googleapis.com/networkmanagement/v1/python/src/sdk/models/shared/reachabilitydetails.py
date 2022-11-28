from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReachabilityDetailsResultEnum(str, Enum):
    RESULT_UNSPECIFIED = "RESULT_UNSPECIFIED"
    REACHABLE = "REACHABLE"
    UNREACHABLE = "UNREACHABLE"
    AMBIGUOUS = "AMBIGUOUS"
    UNDETERMINED = "UNDETERMINED"


@dataclass_json
@dataclass
class ReachabilityDetails:
    r"""ReachabilityDetails
    Results of the configuration analysis from the last run of the test.
    """
    
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    result: Optional[ReachabilityDetailsResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    traces: Optional[List[Trace]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traces') }})
    verify_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyTime') }})
    
