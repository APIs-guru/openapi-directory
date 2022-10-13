from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum(str, Enum):
    UNKNOWN_ADDON_TYPE = "UNKNOWN_ADDON_TYPE"
    GMAIL = "GMAIL"
    DATA_STUDIO = "DATA_STUDIO"


@dataclass_json
@dataclass
class GoogleAppsScriptTypeAddOnEntryPoint:
    add_on_type: Optional[GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOnType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    help_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'helpUrl' }})
    post_install_tip_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postInstallTipUrl' }})
    report_issue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportIssueUrl' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
