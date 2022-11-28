from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum(str, Enum):
    UNKNOWN_ADDON_TYPE = "UNKNOWN_ADDON_TYPE"
    GMAIL = "GMAIL"
    DATA_STUDIO = "DATA_STUDIO"


@dataclass_json
@dataclass
class GoogleAppsScriptTypeAddOnEntryPoint:
    r"""GoogleAppsScriptTypeAddOnEntryPoint
    An add-on entry point.
    """
    
    add_on_type: Optional[GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOnType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    help_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpUrl') }})
    post_install_tip_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postInstallTipUrl') }})
    report_issue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportIssueUrl') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
