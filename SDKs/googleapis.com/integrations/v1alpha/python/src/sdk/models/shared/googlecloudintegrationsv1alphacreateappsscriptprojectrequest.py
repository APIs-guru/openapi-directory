from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest:
    r"""GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest
    Request for CreateAppsScriptProject rpc call.
    """
    
    apps_script_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appsScriptProject') }})
    auth_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authConfigId') }})
    
