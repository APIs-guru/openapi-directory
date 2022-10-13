from dataclasses import dataclass, field
from typing import Enum

class EventTopicActionEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    DELETED = "deleted"
    DISAPPEARED = "disappeared"
    CONNECTION_RSSI_CHANGED = "connection-rssi-changed"

