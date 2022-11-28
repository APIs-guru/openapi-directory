from dataclasses import dataclass, field
from enum import Enum

class LogLevelEnum(str, Enum):
    TRACE = "Trace"
    DEBUG = "Debug"
    INFORMATION = "Information"
    WARNING = "Warning"
    ERROR = "Error"
    CRITICAL = "Critical"
    NONE = "None"

