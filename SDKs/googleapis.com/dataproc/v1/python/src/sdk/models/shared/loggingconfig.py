from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LoggingConfigDriverLogLevelsEnum(str, Enum):
    LEVEL_UNSPECIFIED = "LEVEL_UNSPECIFIED"
    ALL = "ALL"
    TRACE = "TRACE"
    DEBUG = "DEBUG"
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"
    FATAL = "FATAL"
    OFF = "OFF"


@dataclass_json
@dataclass
class LoggingConfig:
    driver_log_levels: Optional[dict[str, LoggingConfigDriverLogLevelsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driverLogLevels' }})
    
