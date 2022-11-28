from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1Fulfillment:
    r"""GoogleCloudDialogflowV2beta1Fulfillment
    By default, your agent responds to a matched intent with a static response. As an alternative, you can provide a more dynamic response by using fulfillment. When you enable fulfillment for an intent, Dialogflow responds to that intent by calling a service that you define. For example, if an end-user wants to schedule a haircut on Friday, your service can check your database and respond to the end-user with availability information for Friday. For more information, see the [fulfillment guide](https://cloud.google.com/dialogflow/docs/fulfillment-overview).
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    features: Optional[List[GoogleCloudDialogflowV2beta1FulfillmentFeature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    generic_web_service: Optional[GoogleCloudDialogflowV2beta1FulfillmentGenericWebService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericWebService') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
