from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput:
    r"""GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput
    This proto holds the core runner data in the bundle task. It is not expected to be directly edited by the user. Instead, a default value will be provided at the task creation time.
    """
    
    integrations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrations') }})
    

@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaIntegrationBundleConfig:
    r"""GoogleCloudIntegrationsV1alphaIntegrationBundleConfig
    This proto holds the core runner data in the bundle task. It is not expected to be directly edited by the user. Instead, a default value will be provided at the task creation time.
    """
    
    integrations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrations') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    
