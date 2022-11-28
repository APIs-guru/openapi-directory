from dataclasses import dataclass, field
from enum import Enum

class PermissionNameEnum(str, Enum):
    BUILDER = "builder"
    MANAGER = "manager"

