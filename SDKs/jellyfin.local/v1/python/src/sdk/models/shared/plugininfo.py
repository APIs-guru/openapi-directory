from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pluginstatus_enum
from . import version


@dataclass_json
@dataclass
class PluginInfo:
    can_uninstall: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanUninstall' }})
    configuration_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationFileName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    has_image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasImage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[pluginstatus_enum.PluginStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
