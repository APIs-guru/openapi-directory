from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1environmenttestcasesconfig
from . import googleclouddialogflowcxv3beta1environmentversionconfig
from . import googleclouddialogflowcxv3beta1environmentwebhookconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Environment:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    test_cases_config: Optional[googleclouddialogflowcxv3beta1environmenttestcasesconfig.GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCasesConfig' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    version_configs: Optional[List[googleclouddialogflowcxv3beta1environmentversionconfig.GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionConfigs' }})
    webhook_config: Optional[googleclouddialogflowcxv3beta1environmentwebhookconfig.GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookConfig' }})
    
