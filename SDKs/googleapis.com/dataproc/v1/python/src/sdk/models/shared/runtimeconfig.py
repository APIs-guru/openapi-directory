from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RuntimeConfig:
    r"""RuntimeConfig
    Runtime configuration for a workload.
    """
    
    container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImage') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
