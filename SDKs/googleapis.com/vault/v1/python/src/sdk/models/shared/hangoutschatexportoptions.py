from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class HangoutsChatExportOptionsExportFormatEnum(str, Enum):
    EXPORT_FORMAT_UNSPECIFIED = "EXPORT_FORMAT_UNSPECIFIED"
    MBOX = "MBOX"
    PST = "PST"


@dataclass_json
@dataclass
class HangoutsChatExportOptions:
    export_format: Optional[HangoutsChatExportOptionsExportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportFormat' }})
    
