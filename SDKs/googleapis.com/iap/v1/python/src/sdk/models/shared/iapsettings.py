from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accesssettings
from . import applicationsettings


@dataclass_json
@dataclass
class IapSettings:
    access_settings: Optional[accesssettings.AccessSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessSettings' }})
    application_settings: Optional[applicationsettings.ApplicationSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationSettings' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
