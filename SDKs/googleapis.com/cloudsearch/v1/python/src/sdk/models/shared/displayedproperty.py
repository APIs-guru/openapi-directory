from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DisplayedProperty:
    r"""DisplayedProperty
    A reference to a top-level property within the object that should be displayed in search results. The values of the chosen properties is displayed in the search results along with the display label for that property if one is specified. If a display label is not specified, only the values is shown.
    """
    
    property_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyName') }})
    
