from dataclasses import dataclass, field
from typing import Enum

class EventTopicResourceTypeEnum(str, Enum):
    BLOBS = "blobs"
    ITEMS = "items"
    KEYS = "keys"
    KVPAIRS = "kvpairs"
    LOCATIONS = "locations"
    PRESENCES = "presences"
    SERVICES = "services"
    SPOTS = "spots"
    SUBSCRIPTIONS = "subscriptions"
    USERS = "users"

