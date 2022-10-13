from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3environmenttestcasesconfig
from . import googleclouddialogflowcxv3environmentversionconfig
from . import googleclouddialogflowcxv3environmentwebhookconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3Environment:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    test_cases_config: Optional[googleclouddialogflowcxv3environmenttestcasesconfig.GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCasesConfig' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    version_configs: Optional[List[googleclouddialogflowcxv3environmentversionconfig.GoogleCloudDialogflowCxV3EnvironmentVersionConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionConfigs' }})
    webhook_config: Optional[googleclouddialogflowcxv3environmentwebhookconfig.GoogleCloudDialogflowCxV3EnvironmentWebhookConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookConfig' }})
    
