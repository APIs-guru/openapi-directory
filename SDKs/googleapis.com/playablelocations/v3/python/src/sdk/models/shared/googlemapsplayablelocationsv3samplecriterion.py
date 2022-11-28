from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SampleCriterion:
    r"""GoogleMapsPlayablelocationsV3SampleCriterion
    Encapsulates a filter criterion for searching for a set of playable locations.
    """
    
    fields_to_return: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldsToReturn') }})
    filter: Optional[GoogleMapsPlayablelocationsV3SampleFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    game_object_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gameObjectType') }})
    
