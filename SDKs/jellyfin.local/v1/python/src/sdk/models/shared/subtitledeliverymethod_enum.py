from dataclasses import dataclass, field
from typing import Enum

class SubtitleDeliveryMethodEnum(str, Enum):
    ENCODE = "Encode"
    EMBED = "Embed"
    EXTERNAL = "External"
    HLS = "Hls"

