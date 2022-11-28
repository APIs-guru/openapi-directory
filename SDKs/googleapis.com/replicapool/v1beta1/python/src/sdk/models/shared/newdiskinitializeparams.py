from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NewDiskInitializeParams:
    r"""NewDiskInitializeParams
    Initialization parameters for creating a new disk.
    """
    
    disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSizeGb') }})
    disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    source_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceImage') }})
    
