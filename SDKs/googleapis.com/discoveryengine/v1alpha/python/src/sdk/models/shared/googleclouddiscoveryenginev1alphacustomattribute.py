from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaCustomAttribute:
    r"""GoogleCloudDiscoveryengineV1alphaCustomAttribute
    A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent.
    """
    
    numbers: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numbers') }})
    text: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
