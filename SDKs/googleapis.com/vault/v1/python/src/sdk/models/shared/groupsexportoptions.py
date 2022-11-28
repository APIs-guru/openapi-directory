from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GroupsExportOptionsExportFormatEnum(str, Enum):
    EXPORT_FORMAT_UNSPECIFIED = "EXPORT_FORMAT_UNSPECIFIED"
    MBOX = "MBOX"
    PST = "PST"


@dataclass_json
@dataclass
class GroupsExportOptions:
    r"""GroupsExportOptions
    Options for Groups exports.
    """
    
    export_format: Optional[GroupsExportOptionsExportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportFormat') }})
    
