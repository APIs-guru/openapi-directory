from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConnectorVersionLaunchStageEnum(str, Enum):
    LAUNCH_STAGE_UNSPECIFIED = "LAUNCH_STAGE_UNSPECIFIED"
    PREVIEW = "PREVIEW"
    GA = "GA"
    DEPRECATED = "DEPRECATED"


@dataclass_json
@dataclass
class ConnectorVersion:
    r"""ConnectorVersion
    ConnectorVersion indicates a specific version of a connector.
    """
    
    auth_config_templates: Optional[List[AuthConfigTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authConfigTemplates') }})
    config_variable_templates: Optional[List[ConfigVariableTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configVariableTemplates') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    egress_control_config: Optional[EgressControlConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressControlConfig') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    launch_stage: Optional[ConnectorVersionLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseVersion') }})
    role_grant: Optional[RoleGrant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleGrant') }})
    role_grants: Optional[List[RoleGrant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleGrants') }})
    supported_runtime_features: Optional[SupportedRuntimeFeatures] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedRuntimeFeatures') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
