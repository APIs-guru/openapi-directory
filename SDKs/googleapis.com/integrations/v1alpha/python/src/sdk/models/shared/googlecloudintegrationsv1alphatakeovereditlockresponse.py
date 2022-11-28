from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse:
    r"""GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse
    Response for TakeoverEditLock.
    """
    
    integration_version: Optional[GoogleCloudIntegrationsV1alphaIntegrationVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationVersion') }})
    
