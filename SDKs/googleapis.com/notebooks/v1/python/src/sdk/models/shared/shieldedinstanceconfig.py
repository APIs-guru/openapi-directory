from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ShieldedInstanceConfig:
    enable_integrity_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableIntegrityMonitoring' }})
    enable_secure_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSecureBoot' }})
    enable_vtpm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableVtpm' }})
    
