from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SetupTag:
    stop_on_setup_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopOnSetupFailure' }})
    tag_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagName' }})
    
