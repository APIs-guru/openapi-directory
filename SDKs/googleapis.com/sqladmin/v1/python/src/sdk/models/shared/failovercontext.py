from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FailoverContext:
    r"""FailoverContext
    Database instance failover context.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    settings_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingsVersion') }})
    
