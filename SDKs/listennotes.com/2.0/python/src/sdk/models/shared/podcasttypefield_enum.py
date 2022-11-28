from dataclasses import dataclass, field
from enum import Enum

class PodcastTypeFieldEnum(str, Enum):
    EPISODIC = "episodic"
    SERIAL = "serial"

