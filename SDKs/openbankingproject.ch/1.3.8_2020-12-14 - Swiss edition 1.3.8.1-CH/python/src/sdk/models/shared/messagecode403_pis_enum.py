from dataclasses import dataclass, field
from typing import Enum

class MessageCode403PisEnum(str, Enum):
    CONSENT_UNKNOWN = "CONSENT_UNKNOWN"
    SERVICE_BLOCKED = "SERVICE_BLOCKED"
    RESOURCE_UNKNOWN = "RESOURCE_UNKNOWN"
    RESOURCE_EXPIRED = "RESOURCE_EXPIRED"
    PRODUCT_INVALID = "PRODUCT_INVALID"

