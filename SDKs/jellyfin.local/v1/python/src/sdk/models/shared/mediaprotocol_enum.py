from dataclasses import dataclass, field
from typing import Enum

class MediaProtocolEnum(str, Enum):
    FILE = "File"
    HTTP = "Http"
    RTMP = "Rtmp"
    RTSP = "Rtsp"
    UDP = "Udp"
    RTP = "Rtp"
    FTP = "Ftp"

