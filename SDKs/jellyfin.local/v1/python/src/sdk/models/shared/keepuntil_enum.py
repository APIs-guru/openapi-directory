from dataclasses import dataclass, field
from enum import Enum

class KeepUntilEnum(str, Enum):
    UNTIL_DELETED = "UntilDeleted"
    UNTIL_SPACE_NEEDED = "UntilSpaceNeeded"
    UNTIL_WATCHED = "UntilWatched"
    UNTIL_DATE = "UntilDate"

