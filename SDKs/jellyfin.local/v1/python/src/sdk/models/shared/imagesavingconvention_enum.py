from dataclasses import dataclass, field
from enum import Enum

class ImageSavingConventionEnum(str, Enum):
    LEGACY = "Legacy"
    COMPATIBLE = "Compatible"

