from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigManagementConfigSync:
    r"""ConfigManagementConfigSync
    Configuration for Config Sync
    """
    
    allow_vertical_scale: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowVerticalScale') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    git: Optional[ConfigManagementGitConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    oci: Optional[ConfigManagementOciConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oci') }})
    prevent_drift: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preventDrift') }})
    source_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFormat') }})
    
