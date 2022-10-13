from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pollingoptions


@dataclass_json
@dataclass
class AsyncOptions:
    method_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodMatch' }})
    polling_options: Optional[pollingoptions.PollingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pollingOptions' }})
    
