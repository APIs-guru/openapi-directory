from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import throttlingsettings


@dataclass_json
@dataclass
class SettingsChangeRequest:
    target_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetUrl' }})
    throttling: throttlingsettings.ThrottlingSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throttling' }})
    
