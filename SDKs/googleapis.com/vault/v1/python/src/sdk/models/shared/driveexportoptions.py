from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DriveExportOptions:
    r"""DriveExportOptions
    Options for Drive exports.
    """
    
    include_access_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeAccessInfo') }})
    
