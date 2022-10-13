from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import managementsettings


@dataclass_json
@dataclass
class ConfigureManagementSettingsRequest:
    management_settings: Optional[managementsettings.ManagementSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managementSettings' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
