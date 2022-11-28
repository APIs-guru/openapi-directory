from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PluginInfo:
    r"""PluginInfo
    This is a serializable stub class that is used by the api to provide information about installed plugins.
    """
    
    can_uninstall: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanUninstall') }})
    configuration_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationFileName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    has_image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasImage') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[PluginStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
