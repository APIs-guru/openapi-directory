from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import consumerconfig


@dataclass_json
@dataclass
class UpdateConsumerConfigRequest:
    consumer_config: Optional[consumerconfig.ConsumerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerConfig' }})
    
