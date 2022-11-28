from dataclasses import dataclass, field
from enum import Enum

class TranscodeSeekInfoEnum(str, Enum):
    AUTO = "Auto"
    BYTES = "Bytes"

