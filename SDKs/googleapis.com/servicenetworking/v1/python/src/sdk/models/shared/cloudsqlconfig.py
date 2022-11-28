from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudSQLConfig:
    r"""CloudSQLConfig
    Cloud SQL configuration.
    """
    
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    umbrella_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('umbrellaNetwork') }})
    umbrella_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('umbrellaProject') }})
    
