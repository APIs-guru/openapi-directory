from dataclasses import dataclass, field
from typing import Enum

class ImageFormatEnum(str, Enum):
    BMP = "Bmp"
    GIF = "Gif"
    JPG = "Jpg"
    PNG = "Png"
    WEBP = "Webp"

