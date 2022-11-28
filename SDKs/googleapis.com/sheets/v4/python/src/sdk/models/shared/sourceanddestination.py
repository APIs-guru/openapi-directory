from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SourceAndDestinationDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclass
class SourceAndDestination:
    r"""SourceAndDestination
    A combination of a source range and how to extend that source.
    """
    
    dimension: Optional[SourceAndDestinationDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    fill_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fillLength') }})
    source: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
