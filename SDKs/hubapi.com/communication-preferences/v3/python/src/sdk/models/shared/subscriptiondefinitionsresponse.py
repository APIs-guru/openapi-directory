from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import subscriptiondefinition


@dataclass_json
@dataclass
class SubscriptionDefinitionsResponse:
    subscription_definitions: List[subscriptiondefinition.SubscriptionDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionDefinitions' }})
    
