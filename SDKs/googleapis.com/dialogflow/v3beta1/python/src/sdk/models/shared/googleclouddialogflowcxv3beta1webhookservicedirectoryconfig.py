from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig:
    r"""GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig
    Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
    """
    
    generic_web_service: Optional[GoogleCloudDialogflowCxV3beta1WebhookGenericWebService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericWebService') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    
