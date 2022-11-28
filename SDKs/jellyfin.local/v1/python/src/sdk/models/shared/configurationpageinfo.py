from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigurationPageInfo:
    r"""ConfigurationPageInfo
    The configuration page info.
    """
    
    configuration_page_type: Optional[ConfigurationPageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationPageType') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    enable_in_main_menu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableInMainMenu') }})
    menu_icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MenuIcon') }})
    menu_section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MenuSection') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    plugin_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PluginId') }})
    
