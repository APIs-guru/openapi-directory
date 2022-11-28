from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Layer:
    r"""Layer
    Layer holds metadata specific to a layer of a Docker image.
    """
    
    arguments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arguments') }})
    directive: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directive') }})
    
