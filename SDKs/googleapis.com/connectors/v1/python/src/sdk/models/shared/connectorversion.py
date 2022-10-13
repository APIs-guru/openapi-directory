from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authconfigtemplate
from . import configvariabletemplate
from . import egresscontrolconfig
from . import rolegrant
from . import rolegrant
from . import supportedruntimefeatures

class ConnectorVersionLaunchStageEnum(str, Enum):
    LAUNCH_STAGE_UNSPECIFIED = "LAUNCH_STAGE_UNSPECIFIED"
    PREVIEW = "PREVIEW"
    GA = "GA"
    DEPRECATED = "DEPRECATED"


@dataclass_json
@dataclass
class ConnectorVersion:
    auth_config_templates: Optional[List[authconfigtemplate.AuthConfigTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authConfigTemplates' }})
    config_variable_templates: Optional[List[configvariabletemplate.ConfigVariableTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configVariableTemplates' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    egress_control_config: Optional[egresscontrolconfig.EgressControlConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egressControlConfig' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    launch_stage: Optional[ConnectorVersionLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    release_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseVersion' }})
    role_grant: Optional[rolegrant.RoleGrant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleGrant' }})
    role_grants: Optional[List[rolegrant.RoleGrant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleGrants' }})
    supported_runtime_features: Optional[supportedruntimefeatures.SupportedRuntimeFeatures] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedRuntimeFeatures' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
