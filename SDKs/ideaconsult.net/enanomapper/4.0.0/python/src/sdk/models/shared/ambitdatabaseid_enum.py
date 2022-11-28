from dataclasses import dataclass, field
from enum import Enum

class AmbitDatabaseIDEnum(str, Enum):
    CALIBRATE = "calibrate"
    ENANOMAPPER = "enanomapper"
    ENPRA = "enpra"
    MARINA = "marina"
    NANOGENOTOX = "nanogenotox"
    NANOINFORMATIX = "nanoinformatix"
    NANOREG1 = "nanoreg1"
    NANOREG2 = "nanoreg2"
    NANOTEST = "nanotest"

