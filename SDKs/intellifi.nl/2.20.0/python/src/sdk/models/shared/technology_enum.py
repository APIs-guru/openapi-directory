from dataclasses import dataclass, field
from typing import Enum

class TechnologyEnum(str, Enum):
    BLUETOOTH = "bluetooth"
    OPTICAL = "optical"
    RFID = "rfid"

