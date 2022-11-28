from dataclasses import dataclass, field
from enum import Enum

class ServiceRoleEnum(str, Enum):
    HIP = "HIP"
    HIU = "HIU"
    HIP_AND_HIU = "HIP_AND_HIU"
    HEALTH_LOCKER = "HEALTH_LOCKER"

