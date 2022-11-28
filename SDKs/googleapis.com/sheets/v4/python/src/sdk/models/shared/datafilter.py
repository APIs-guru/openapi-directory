from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataFilter:
    r"""DataFilter
    Filter that describes what data should be selected or returned from a request.
    """
    
    a1_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('a1Range') }})
    developer_metadata_lookup: Optional[DeveloperMetadataLookup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadataLookup') }})
    grid_range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gridRange') }})
    
