from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EdgeLocation:
    r"""EdgeLocation
    Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations.
    """
    
    metropolitan_area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metropolitanArea') }})
    
