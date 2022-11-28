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
class GoogleCloudDialogflowV2IntentMessageSimpleResponses:
    r"""GoogleCloudDialogflowV2IntentMessageSimpleResponses
    The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
    """
    
    simple_responses: Optional[List[GoogleCloudDialogflowV2IntentMessageSimpleResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleResponses') }})
    
