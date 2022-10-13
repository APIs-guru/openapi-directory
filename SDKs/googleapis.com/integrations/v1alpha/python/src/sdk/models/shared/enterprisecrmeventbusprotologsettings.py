from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmlogginggwssanitizeoptions
from . import enterprisecrmlogginggwsfieldlimits

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
    log_field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logFieldName' }})
    sanitize_options: Optional[enterprisecrmlogginggwssanitizeoptions.EnterpriseCrmLoggingGwsSanitizeOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sanitizeOptions' }})
    seed_period: Optional[EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seedPeriod' }})
    seed_scope: Optional[EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seedScope' }})
    shortening_limits: Optional[enterprisecrmlogginggwsfieldlimits.EnterpriseCrmLoggingGwsFieldLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shorteningLimits' }})
    
