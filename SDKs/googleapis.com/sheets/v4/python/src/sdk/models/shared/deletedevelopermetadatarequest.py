from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteDeveloperMetadataRequest:
    r"""DeleteDeveloperMetadataRequest
    A request to delete developer metadata.
    """
    
    data_filter: Optional[DataFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilter') }})
    
