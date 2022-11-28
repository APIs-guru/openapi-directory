from dataclasses import dataclass, field
from enum import Enum

class ObOverdraftFeeType1CodeEnum(str, Enum):
    FBAO = "FBAO"
    FBAR = "FBAR"
    FBEB = "FBEB"
    FBIT = "FBIT"
    FBOR = "FBOR"
    FBOS = "FBOS"
    FBSC = "FBSC"
    FBTO = "FBTO"
    FBUB = "FBUB"
    FBUT = "FBUT"
    FTOT = "FTOT"
    FTUT = "FTUT"

