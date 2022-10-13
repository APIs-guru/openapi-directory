from dataclasses import dataclass, field
from typing import Enum

class MessageCode404PisEnum(str, Enum):
    RESOURCE_UNKNOWN = "RESOURCE_UNKNOWN"
    PRODUCT_UNKNOWN = "PRODUCT_UNKNOWN"

