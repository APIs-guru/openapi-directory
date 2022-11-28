from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ManagedZoneCloudLoggingConfig:
    r"""ManagedZoneCloudLoggingConfig
    Cloud Logging configurations for publicly visible zones.
    """
    
    enable_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableLogging') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
