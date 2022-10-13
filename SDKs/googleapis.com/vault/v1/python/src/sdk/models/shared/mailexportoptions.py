from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MailExportOptionsExportFormatEnum(str, Enum):
    EXPORT_FORMAT_UNSPECIFIED = "EXPORT_FORMAT_UNSPECIFIED"
    MBOX = "MBOX"
    PST = "PST"


@dataclass_json
@dataclass
class MailExportOptions:
    export_format: Optional[MailExportOptionsExportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportFormat' }})
    show_confidential_mode_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showConfidentialModeContent' }})
    use_new_export: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useNewExport' }})
    
