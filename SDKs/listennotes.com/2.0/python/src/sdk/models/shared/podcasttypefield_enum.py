from dataclasses import dataclass, field
from typing import Enum

class PodcastTypeFieldEnum(str, Enum):
    EPISODIC = "episodic"
    SERIAL = "serial"

