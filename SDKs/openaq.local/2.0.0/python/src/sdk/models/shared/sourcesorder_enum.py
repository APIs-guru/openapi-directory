from dataclasses import dataclass, field
from typing import Enum

class SourcesOrderEnum(str, Enum):
    SOURCE_NAME = "sourceName"
    FIRST_UPDATED = "firstUpdated"
    LAST_UPDATED = "lastUpdated"

