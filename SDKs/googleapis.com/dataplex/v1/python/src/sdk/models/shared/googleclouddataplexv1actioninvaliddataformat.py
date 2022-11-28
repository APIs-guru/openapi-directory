from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ActionInvalidDataFormat:
    r"""GoogleCloudDataplexV1ActionInvalidDataFormat
    Action details for invalid or unsupported data files detected by discovery.
    """
    
    expected_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedFormat') }})
    new_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newFormat') }})
    sampled_data_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampledDataLocations') }})
    
