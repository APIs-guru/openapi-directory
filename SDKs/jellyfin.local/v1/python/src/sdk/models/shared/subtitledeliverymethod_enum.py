from dataclasses import dataclass, field
from enum import Enum

class SubtitleDeliveryMethodEnum(str, Enum):
    ENCODE = "Encode"
    EMBED = "Embed"
    EXTERNAL = "External"
    HLS = "Hls"

