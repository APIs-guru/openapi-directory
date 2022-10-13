from dataclasses import dataclass, field
from typing import Enum

class ConsentStatusEnum(str, Enum):
    RECEIVED = "received"
    REJECTED = "rejected"
    VALID = "valid"
    REVOKED_BY_PSU = "revokedByPsu"
    EXPIRED = "expired"
    TERMINATED_BY_TPP = "terminatedByTpp"
    PARTIALLY_AUTHORISED = "partiallyAuthorised"

