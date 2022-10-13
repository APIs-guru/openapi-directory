from dataclasses import dataclass, field
from typing import Enum

class EncodingContextEnum(str, Enum):
    STREAMING = "Streaming"
    STATIC = "Static"

