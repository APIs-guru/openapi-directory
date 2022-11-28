from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionDefinitionsResponse:
    r"""SubscriptionDefinitionsResponse
    A collection of subscription definitions for the portal.
    """
    
    subscription_definitions: List[SubscriptionDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionDefinitions') }})
    
