from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""EnterpriseCrmLoggingGwsSanitizeOptions
    Identifies whether a field contains, or may contain, PII or sensitive data, and how to sanitize the field if it does. If a field's privacy type cannot be determined then it is sanitized (e.g., scrubbed). The specific sanitizer implementation is determined by run-time configuration and environment options (e.g., prod vs. qa). next_id: 5
    """
    
    is_already_sanitized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAlreadySanitized') }})
    log_type: Optional[List[EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logType') }})
    privacy: Optional[EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    sanitize_type: Optional[EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sanitizeType') }})
    
