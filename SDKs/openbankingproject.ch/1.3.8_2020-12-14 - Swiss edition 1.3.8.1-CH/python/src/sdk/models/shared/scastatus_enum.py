from dataclasses import dataclass, field
from enum import Enum

class ScaStatusEnum(str, Enum):
    RECEIVED = "received"
    PSU_IDENTIFIED = "psuIdentified"
    PSU_AUTHENTICATED = "psuAuthenticated"
    SCA_METHOD_SELECTED = "scaMethodSelected"
    STARTED = "started"
    UNCONFIRMED = "unconfirmed"
    FINALISED = "finalised"
    FAILED = "failed"
    EXEMPTED = "exempted"

