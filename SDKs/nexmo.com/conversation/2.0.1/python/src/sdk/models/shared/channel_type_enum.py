from dataclasses import dataclass, field
from enum import Enum

class ChannelTypeEnum(str, Enum):
    APP = "app"
    PHONE = "phone"
    SIP = "sip"
    WEBSOCKET = "websocket"
    VBC = "vbc"

