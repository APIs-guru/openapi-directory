from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SourcePredefinedSourceEnum(str, Enum):
    NONE = "NONE"
    QUERY_HISTORY = "QUERY_HISTORY"
    PERSON = "PERSON"
    GOOGLE_DRIVE = "GOOGLE_DRIVE"
    GOOGLE_GMAIL = "GOOGLE_GMAIL"
    GOOGLE_SITES = "GOOGLE_SITES"
    GOOGLE_GROUPS = "GOOGLE_GROUPS"
    GOOGLE_CALENDAR = "GOOGLE_CALENDAR"
    GOOGLE_KEEP = "GOOGLE_KEEP"


@dataclass_json
@dataclass
class Source:
    r"""Source
    Defines sources for the suggest/search APIs.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    predefined_source: Optional[SourcePredefinedSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedSource') }})
    
