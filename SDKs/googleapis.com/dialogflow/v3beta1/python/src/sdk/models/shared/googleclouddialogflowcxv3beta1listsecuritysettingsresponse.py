from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1securitysettings


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    security_settings: Optional[List[googleclouddialogflowcxv3beta1securitysettings.GoogleCloudDialogflowCxV3beta1SecuritySettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securitySettings' }})
    
