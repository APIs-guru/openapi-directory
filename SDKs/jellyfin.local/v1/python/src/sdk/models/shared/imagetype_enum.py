from dataclasses import dataclass, field
from typing import Enum

class ImageTypeEnum(str, Enum):
    PRIMARY = "Primary"
    ART = "Art"
    BACKDROP = "Backdrop"
    BANNER = "Banner"
    LOGO = "Logo"
    THUMB = "Thumb"
    DISC = "Disc"
    BOX = "Box"
    SCREENSHOT = "Screenshot"
    MENU = "Menu"
    CHAPTER = "Chapter"
    BOX_REAR = "BoxRear"
    PROFILE = "Profile"

