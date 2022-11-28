from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput:
    r"""GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput
    Request for [Suspensions.ResolveSuspensions].
    """
    
    suspension: Optional[GoogleCloudIntegrationsV1alphaSuspensionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspension') }})
    
