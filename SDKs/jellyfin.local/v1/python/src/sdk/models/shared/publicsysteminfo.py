from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PublicSystemInfo:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    local_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalAddress' }})
    operating_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    startup_wizard_completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartupWizardCompleted' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
