from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudauditoptions
from . import counteroptions
from . import dataaccessoptions


@dataclass_json
@dataclass
class LogConfig:
    cloud_audit: Optional[cloudauditoptions.CloudAuditOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudAudit' }})
    counter: Optional[counteroptions.CounterOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counter' }})
    data_access: Optional[dataaccessoptions.DataAccessOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataAccess' }})
    
