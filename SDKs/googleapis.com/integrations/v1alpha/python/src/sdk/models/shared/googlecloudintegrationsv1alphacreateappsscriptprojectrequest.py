from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest:
    apps_script_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appsScriptProject' }})
    auth_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authConfigId' }})
    
