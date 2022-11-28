from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaCreateBundleResponse:
    r"""GoogleCloudIntegrationsV1alphaCreateBundleResponse
    Response for create bundle.
    """
    
    config: Optional[GoogleCloudIntegrationsV1alphaIntegrationBundleConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    trigger_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerId') }})
    
