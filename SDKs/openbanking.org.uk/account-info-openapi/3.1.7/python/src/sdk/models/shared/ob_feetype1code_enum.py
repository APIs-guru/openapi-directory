from dataclasses import dataclass, field
from enum import Enum

class ObFeeType1CodeEnum(str, Enum):
    FEPF = "FEPF"
    FTOT = "FTOT"
    FYAF = "FYAF"
    FYAM = "FYAM"
    FYAQ = "FYAQ"
    FYCP = "FYCP"
    FYDB = "FYDB"
    FYMI = "FYMI"
    FYXX = "FYXX"

