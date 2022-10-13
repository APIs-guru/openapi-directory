from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VoiceExportOptionsExportFormatEnum(str, Enum):
    EXPORT_FORMAT_UNSPECIFIED = "EXPORT_FORMAT_UNSPECIFIED"
    MBOX = "MBOX"
    PST = "PST"


@dataclass_json
@dataclass
class VoiceExportOptions:
    export_format: Optional[VoiceExportOptionsExportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportFormat' }})
    
