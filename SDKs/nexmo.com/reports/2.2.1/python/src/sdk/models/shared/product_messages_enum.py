from dataclasses import dataclass, field
from typing import Enum

class ProductMessagesEnum(str, Enum):
    SMS = "SMS"
    VOICE_CALL = "VOICE-CALL"
    IN_APP_VOICE = "IN-APP-VOICE"
    VERIFY_API = "VERIFY-API"
    NUMBER_INSIGHT = "NUMBER-INSIGHT"
    MESSAGES = "MESSAGES"
    CONVERSATIONS = "CONVERSATIONS"
    ASR = "ASR"

