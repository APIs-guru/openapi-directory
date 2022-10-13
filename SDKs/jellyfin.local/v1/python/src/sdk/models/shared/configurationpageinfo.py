from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationpagetype_enum


@dataclass_json
@dataclass
class ConfigurationPageInfo:
    configuration_page_type: Optional[configurationpagetype_enum.ConfigurationPageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationPageType' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    enable_in_main_menu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableInMainMenu' }})
    menu_icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MenuIcon' }})
    menu_section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MenuSection' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    plugin_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PluginId' }})
    
