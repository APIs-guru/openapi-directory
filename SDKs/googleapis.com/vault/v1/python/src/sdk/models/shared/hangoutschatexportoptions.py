from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HangoutsChatExportOptionsExportFormatEnum(str, Enum):
    EXPORT_FORMAT_UNSPECIFIED = "EXPORT_FORMAT_UNSPECIFIED"
    MBOX = "MBOX"
    PST = "PST"


@dataclass_json
@dataclass
class HangoutsChatExportOptions:
    r"""HangoutsChatExportOptions
    Options for Chat exports.
    """
    
    export_format: Optional[HangoutsChatExportOptionsExportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportFormat') }})
    
