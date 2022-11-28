from dataclasses import dataclass, field
from enum import Enum

class ForgotPasswordActionEnum(str, Enum):
    CONTACT_ADMIN = "ContactAdmin"
    PIN_CODE = "PinCode"
    IN_NETWORK_REQUIRED = "InNetworkRequired"

