from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum(str, Enum):
    LOG_ACTION_UNSPECIFIED = "LOG_ACTION_UNSPECIFIED"
    DONT_LOG = "DONT_LOG"
    LOG = "LOG"

class EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum(str, Enum):
    LOG_TYPE_UNSPECIFIED = "LOG_TYPE_UNSPECIFIED"
    GWS = "GWS"
    GTS = "GTS"
    ALL = "ALL"

class EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum(str, Enum):
    SHORTENER_TYPE_UNSPECIFIED = "SHORTENER_TYPE_UNSPECIFIED"
    SHORTEN = "SHORTEN"
    HASH = "HASH"
    SHORTEN_WITH_HASH = "SHORTEN_WITH_HASH"
    SHORTEN_EMAIL = "SHORTEN_EMAIL"
    SHORTEN_EMAIL_WITH_HASH = "SHORTEN_EMAIL_WITH_HASH"
    SHORTEN_DOMAIN = "SHORTEN_DOMAIN"


@dataclass_json
@dataclass
class EnterpriseCrmLoggingGwsFieldLimits:
    log_action: Optional[EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logAction' }})
    log_type: Optional[List[EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logType' }})
    max_array_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxArraySize' }})
    max_string_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxStringLength' }})
    shortener_type: Optional[EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortenerType' }})
    
