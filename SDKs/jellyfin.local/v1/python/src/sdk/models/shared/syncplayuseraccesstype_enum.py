from dataclasses import dataclass, field
from typing import Enum

class SyncPlayUserAccessTypeEnum(str, Enum):
    CREATE_AND_JOIN_GROUPS = "CreateAndJoinGroups"
    JOIN_GROUPS = "JoinGroups"
    NONE = "None"

