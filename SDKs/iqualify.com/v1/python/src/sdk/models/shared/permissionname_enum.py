from dataclasses import dataclass, field
from typing import Enum

class PermissionNameEnum(str, Enum):
    BUILDER = "builder"
    MANAGER = "manager"

