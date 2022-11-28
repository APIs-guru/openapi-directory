from dataclasses import dataclass, field
from enum import Enum

class ObChargeBearerType1CodeEnum(str, Enum):
    BORNE_BY_CREDITOR = "BorneByCreditor"
    BORNE_BY_DEBTOR = "BorneByDebtor"
    FOLLOWING_SERVICE_LEVEL = "FollowingServiceLevel"
    SHARED = "Shared"

