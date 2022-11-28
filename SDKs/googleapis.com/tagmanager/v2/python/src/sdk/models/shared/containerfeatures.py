from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContainerFeatures:
    support_built_in_variables: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportBuiltInVariables') }})
    support_clients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportClients') }})
    support_environments: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportEnvironments') }})
    support_folders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportFolders') }})
    support_gtag_configs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportGtagConfigs') }})
    support_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportTags') }})
    support_templates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportTemplates') }})
    support_triggers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportTriggers') }})
    support_user_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportUserPermissions') }})
    support_variables: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportVariables') }})
    support_versions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportVersions') }})
    support_workspaces: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportWorkspaces') }})
    support_zones: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportZones') }})
    
