from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListWebhooksResponse:
    r"""GoogleCloudDialogflowCxV3ListWebhooksResponse
    The response message for Webhooks.ListWebhooks.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    webhooks: Optional[List[GoogleCloudDialogflowCxV3Webhook]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    
