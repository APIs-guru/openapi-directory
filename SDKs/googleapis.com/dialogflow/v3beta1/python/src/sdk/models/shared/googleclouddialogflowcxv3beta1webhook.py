from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Webhook:
    r"""GoogleCloudDialogflowCxV3beta1Webhook
    Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
    """
    
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    generic_web_service: Optional[GoogleCloudDialogflowCxV3beta1WebhookGenericWebService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericWebService') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_directory: Optional[GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDirectory') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
