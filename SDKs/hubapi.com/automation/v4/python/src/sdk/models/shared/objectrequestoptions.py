from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectRequestOptions:
    r"""ObjectRequestOptions
    Configures what properties of the enrolled CRM object are included in the action execution request
    """
    
    properties: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
