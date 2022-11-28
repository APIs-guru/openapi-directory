from dataclasses import dataclass, field
from enum import Enum

class SyncPlayUserAccessTypeEnum(str, Enum):
    CREATE_AND_JOIN_GROUPS = "CreateAndJoinGroups"
    JOIN_GROUPS = "JoinGroups"
    NONE = "None"

