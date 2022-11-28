from dataclasses import dataclass, field
from enum import Enum

class AuthenticationTypeEnum(str, Enum):
    SMS_OTP = "SMS_OTP"
    CHIP_OTP = "CHIP_OTP"
    PHOTO_OTP = "PHOTO_OTP"
    PUSH_OTP = "PUSH_OTP"
    SMTP_OTP = "SMTP_OTP"

