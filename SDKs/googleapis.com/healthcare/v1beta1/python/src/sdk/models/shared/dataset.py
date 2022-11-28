from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Dataset:
    r"""Dataset
    A message representing a health dataset. A health dataset represents a collection of healthcare data pertaining to one or more patients. This may include multiple modalities of healthcare data, such as electronic medical records or medical imaging data.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
