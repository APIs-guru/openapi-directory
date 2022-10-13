from dataclasses import dataclass, field
from typing import Enum

class ChannelTypeEnum(str, Enum):
    APP = "app"
    PHONE = "phone"
    SIP = "sip"
    WEBSOCKET = "websocket"
    VBC = "vbc"

