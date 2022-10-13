from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configmanagementgitconfig
from . import configmanagementociconfig


@dataclass_json
@dataclass
class ConfigManagementConfigSync:
    allow_vertical_scale: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowVerticalScale' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    git: Optional[configmanagementgitconfig.ConfigManagementGitConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    oci: Optional[configmanagementociconfig.ConfigManagementOciConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oci' }})
    prevent_drift: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preventDrift' }})
    source_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceFormat' }})
    
