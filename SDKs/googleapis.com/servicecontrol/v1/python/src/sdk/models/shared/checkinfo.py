from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consumerinfo


@dataclass_json
@dataclass
class CheckInfo:
    consumer_info: Optional[consumerinfo.ConsumerInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerInfo' }})
    unused_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unusedArguments' }})
    
