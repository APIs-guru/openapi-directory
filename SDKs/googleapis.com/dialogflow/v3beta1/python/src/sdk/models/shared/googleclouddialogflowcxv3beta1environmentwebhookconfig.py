from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig:
    r"""GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig
    Configuration for webhooks.
    """
    
    webhook_overrides: Optional[List[GoogleCloudDialogflowCxV3beta1Webhook]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookOverrides') }})
    
