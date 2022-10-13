from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import formsettings


@dataclass_json
@dataclass
class UpdateSettingsRequest:
    settings: Optional[formsettings.FormSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
