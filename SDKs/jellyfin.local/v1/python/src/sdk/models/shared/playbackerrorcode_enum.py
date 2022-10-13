from dataclasses import dataclass, field
from typing import Enum

class PlaybackErrorCodeEnum(str, Enum):
    NOT_ALLOWED = "NotAllowed"
    NO_COMPATIBLE_STREAM = "NoCompatibleStream"
    RATE_LIMIT_EXCEEDED = "RateLimitExceeded"

