from dataclasses import dataclass, field
from enum import Enum

class ItemTypeEnum(str, Enum):
    BARCODE = "barcode"
    BLUETITAN = "bluetitan"
    GBTAG = "gbtag"
    RELAY = "relay"
    SMARTTAG = "smarttag"
    TAG = "tag"

