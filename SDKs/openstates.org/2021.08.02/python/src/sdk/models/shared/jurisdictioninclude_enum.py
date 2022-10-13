from dataclasses import dataclass, field
from typing import Enum

class JurisdictionIncludeEnum(str, Enum):
    ORGANIZATIONS = "organizations"
    LEGISLATIVE_SESSIONS = "legislative_sessions"
    LATEST_RUNS = "latest_runs"

