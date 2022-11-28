from dataclasses import dataclass, field
from enum import Enum

class EncodingContextEnum(str, Enum):
    STREAMING = "Streaming"
    STATIC = "Static"

