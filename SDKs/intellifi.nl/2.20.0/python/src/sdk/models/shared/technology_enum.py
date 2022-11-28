from dataclasses import dataclass, field
from enum import Enum

class TechnologyEnum(str, Enum):
    BLUETOOTH = "bluetooth"
    OPTICAL = "optical"
    RFID = "rfid"

