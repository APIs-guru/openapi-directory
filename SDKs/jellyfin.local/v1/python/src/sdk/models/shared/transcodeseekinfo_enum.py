from dataclasses import dataclass, field
from typing import Enum

class TranscodeSeekInfoEnum(str, Enum):
    AUTO = "Auto"
    BYTES = "Bytes"

