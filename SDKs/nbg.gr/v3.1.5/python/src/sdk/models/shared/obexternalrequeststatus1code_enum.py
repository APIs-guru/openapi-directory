from dataclasses import dataclass, field
from enum import Enum

class ObExternalRequestStatus1CodeEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_AUTHORISATION = "AwaitingAuthorisation"
    REJECTED = "Rejected"
    REVOKED = "Revoked"

