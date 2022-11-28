from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class EventTopicActionEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    DELETED = "deleted"
    DISAPPEARED = "disappeared"
    CONNECTION_RSSI_CHANGED = "connection-rssi-changed"

