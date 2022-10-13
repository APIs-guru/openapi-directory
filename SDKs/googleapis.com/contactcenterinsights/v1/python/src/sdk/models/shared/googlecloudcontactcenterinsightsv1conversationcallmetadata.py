from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationCallMetadata:
    agent_channel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentChannel' }})
    customer_channel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerChannel' }})
    
