from dataclasses import dataclass, field
from enum import Enum

class FallbackEnum(str, Enum):
    ANY = "any"
    AREA = "area"
    SINGLE_WIFI = "singleWifi"

