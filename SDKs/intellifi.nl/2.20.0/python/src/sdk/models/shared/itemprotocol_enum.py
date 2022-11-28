from dataclasses import dataclass, field
from enum import Enum

class ItemProtocolEnum(str, Enum):
    ALTBEACON = "altbeacon"
    UNIWEAR = "uniwear"
    NFC = "nfc"
    GENERIC = "generic"
    EDDYSTONE = "eddystone"
    EPCGEN2 = "epcgen2"
    IBEACON = "ibeacon"
    NANOBLE = "nanoble"

