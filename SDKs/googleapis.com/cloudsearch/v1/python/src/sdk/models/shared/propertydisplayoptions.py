from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PropertyDisplayOptions:
    r"""PropertyDisplayOptions
    The display options for a property.
    """
    
    display_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayLabel') }})
    
