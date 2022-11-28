from dataclasses import dataclass, field
from enum import Enum

class MessageCode403PiisEnum(str, Enum):
    CONSENT_UNKNOWN = "CONSENT_UNKNOWN"
    SERVICE_BLOCKED = "SERVICE_BLOCKED"
    RESOURCE_UNKNOWN = "RESOURCE_UNKNOWN"
    RESOURCE_EXPIRED = "RESOURCE_EXPIRED"

