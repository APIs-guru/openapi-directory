from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VoiceExportOptionsExportFormatEnum(str, Enum):
    EXPORT_FORMAT_UNSPECIFIED = "EXPORT_FORMAT_UNSPECIFIED"
    MBOX = "MBOX"
    PST = "PST"


@dataclass_json
@dataclass
class VoiceExportOptions:
    r"""VoiceExportOptions
    The options for Voice exports.
    """
    
    export_format: Optional[VoiceExportOptionsExportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportFormat') }})
    
