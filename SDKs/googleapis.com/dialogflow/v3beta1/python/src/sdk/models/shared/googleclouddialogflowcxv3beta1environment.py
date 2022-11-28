from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Environment:
    r"""GoogleCloudDialogflowCxV3beta1Environment
    Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    test_cases_config: Optional[GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCasesConfig') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    version_configs: Optional[List[GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionConfigs') }})
    webhook_config: Optional[GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookConfig') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1EnvironmentInput:
    r"""GoogleCloudDialogflowCxV3beta1EnvironmentInput
    Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    test_cases_config: Optional[GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCasesConfig') }})
    version_configs: Optional[List[GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionConfigs') }})
    webhook_config: Optional[GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookConfig') }})
    
