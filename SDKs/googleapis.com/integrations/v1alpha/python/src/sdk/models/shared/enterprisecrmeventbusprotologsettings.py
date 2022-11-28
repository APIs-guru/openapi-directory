from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum(str, Enum):
    SEED_PERIOD_UNSPECIFIED = "SEED_PERIOD_UNSPECIFIED"
    DAY = "DAY"
    WEEK = "WEEK"
    MONTH = "MONTH"

class EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum(str, Enum):
    SEED_SCOPE_UNSPECIFIED = "SEED_SCOPE_UNSPECIFIED"
    EVENT_NAME = "EVENT_NAME"
    TIME_PERIOD = "TIME_PERIOD"
    PARAM_NAME = "PARAM_NAME"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoLogSettings:
    r"""EnterpriseCrmEventbusProtoLogSettings
    The LogSettings define the logging attributes for an event property. These attributes are used to map the property to the parameter in the log proto. Also used to define scrubbing/truncation behavior and PII information. See go/integration-platform/analytics/logging_task.md for details.
    """
    
    log_field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logFieldName') }})
    sanitize_options: Optional[EnterpriseCrmLoggingGwsSanitizeOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sanitizeOptions') }})
    seed_period: Optional[EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seedPeriod') }})
    seed_scope: Optional[EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seedScope') }})
    shortening_limits: Optional[EnterpriseCrmLoggingGwsFieldLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shorteningLimits') }})
    
