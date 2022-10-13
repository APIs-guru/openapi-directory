from dataclasses import dataclass, field
from typing import Enum

class BillIncludeEnum(str, Enum):
    SPONSORSHIPS = "sponsorships"
    ABSTRACTS = "abstracts"
    OTHER_TITLES = "other_titles"
    OTHER_IDENTIFIERS = "other_identifiers"
    ACTIONS = "actions"
    SOURCES = "sources"
    DOCUMENTS = "documents"
    VERSIONS = "versions"
    VOTES = "votes"

