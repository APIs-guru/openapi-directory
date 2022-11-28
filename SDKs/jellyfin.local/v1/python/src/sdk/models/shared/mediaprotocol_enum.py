from dataclasses import dataclass, field
from enum import Enum

class MediaProtocolEnum(str, Enum):
    FILE = "File"
    HTTP = "Http"
    RTMP = "Rtmp"
    RTSP = "Rtsp"
    UDP = "Udp"
    RTP = "Rtp"
    FTP = "Ftp"

