from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ScanRunErrorTraceCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    INTERNAL_ERROR = "INTERNAL_ERROR"
    SCAN_CONFIG_ISSUE = "SCAN_CONFIG_ISSUE"
    AUTHENTICATION_CONFIG_ISSUE = "AUTHENTICATION_CONFIG_ISSUE"
    TIMED_OUT_WHILE_SCANNING = "TIMED_OUT_WHILE_SCANNING"
    TOO_MANY_REDIRECTS = "TOO_MANY_REDIRECTS"
    TOO_MANY_HTTP_ERRORS = "TOO_MANY_HTTP_ERRORS"


@dataclass_json
@dataclass
class ScanRunErrorTrace:
    r"""ScanRunErrorTrace
    Output only. Defines an error trace message for a ScanRun.
    """
    
    code: Optional[ScanRunErrorTraceCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    most_common_http_error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mostCommonHttpErrorCode') }})
    scan_config_error: Optional[ScanConfigError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scanConfigError') }})
    
