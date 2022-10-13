from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum(str, Enum):
    LOG_TYPE_UNSPECIFIED = "LOG_TYPE_UNSPECIFIED"
    GWS = "GWS"
    GTS = "GTS"
    ALL = "ALL"

class EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum(str, Enum):
    PRIVACY_TYPE_UNSPECIFIED = "PRIVACY_TYPE_UNSPECIFIED"
    NOT_PII = "NOT_PII"
    PII = "PII"
    SPII = "SPII"
    UNSURE = "UNSURE"

class EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum(str, Enum):
    SANITIZE_TYPE_UNSPECIFIED = "SANITIZE_TYPE_UNSPECIFIED"
    SCRUB = "SCRUB"
    ANONYMIZE = "ANONYMIZE"
    ANONYMIZE_LIMITED_REPEATABLE = "ANONYMIZE_LIMITED_REPEATABLE"
    OBFUSCATE = "OBFUSCATE"
    ENCRYPT = "ENCRYPT"
    DO_NOT_SANITIZE = "DO_NOT_SANITIZE"


@dataclass_json
@dataclass
class EnterpriseCrmLoggingGwsSanitizeOptions:
    is_already_sanitized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAlreadySanitized' }})
    log_type: Optional[List[EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logType' }})
    privacy: Optional[EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    sanitize_type: Optional[EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sanitizeType' }})
    
