from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TransformSummaryKindEnum(str, Enum):
    UNKNOWN_KIND = "UNKNOWN_KIND"
    PAR_DO_KIND = "PAR_DO_KIND"
    GROUP_BY_KEY_KIND = "GROUP_BY_KEY_KIND"
    FLATTEN_KIND = "FLATTEN_KIND"
    READ_KIND = "READ_KIND"
    WRITE_KIND = "WRITE_KIND"
    CONSTANT_KIND = "CONSTANT_KIND"
    SINGLETON_KIND = "SINGLETON_KIND"
    SHUFFLE_KIND = "SHUFFLE_KIND"


@dataclass_json
@dataclass
class TransformSummary:
    r"""TransformSummary
    Description of the type, names/ids, and input/outputs for a transform.
    """
    
    display_data: Optional[List[DisplayData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayData') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    input_collection_name: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputCollectionName') }})
    kind: Optional[TransformSummaryKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_collection_name: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputCollectionName') }})
    
