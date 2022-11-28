from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OracleSourceConfig:
    r"""OracleSourceConfig
    Oracle data source configuration
    """
    
    allowlist: Optional[OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowlist') }})
    drop_large_objects: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropLargeObjects') }})
    rejectlist: Optional[OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectlist') }})
    
