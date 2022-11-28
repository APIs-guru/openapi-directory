from dataclasses import dataclass, field
from enum import Enum

class TypeEnum(str, Enum):
    LANDLINE = "landline"
    MOBILE_LVN = "mobile-lvn"
    LANDLINE_TOLL_FREE = "landline-toll-free"

