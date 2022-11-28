from dataclasses import dataclass, field
from enum import Enum

class JurisdictionIncludeEnum(str, Enum):
    ORGANIZATIONS = "organizations"
    LEGISLATIVE_SESSIONS = "legislative_sessions"
    LATEST_RUNS = "latest_runs"

