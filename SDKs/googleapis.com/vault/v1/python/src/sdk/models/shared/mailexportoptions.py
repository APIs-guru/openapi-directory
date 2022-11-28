from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MailExportOptionsExportFormatEnum(str, Enum):
    EXPORT_FORMAT_UNSPECIFIED = "EXPORT_FORMAT_UNSPECIFIED"
    MBOX = "MBOX"
    PST = "PST"


@dataclass_json
@dataclass
class MailExportOptions:
    r"""MailExportOptions
    Options for Gmail exports.
    """
    
    export_format: Optional[MailExportOptionsExportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportFormat') }})
    show_confidential_mode_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showConfidentialModeContent') }})
    use_new_export: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useNewExport') }})
    
