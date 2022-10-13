from dataclasses import dataclass, field
from typing import Enum

class ImageSavingConventionEnum(str, Enum):
    LEGACY = "Legacy"
    COMPATIBLE = "Compatible"

