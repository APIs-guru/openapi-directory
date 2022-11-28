from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetPhotosResponse:
    r"""BatchGetPhotosResponse
    Response to batch get of Photos.
    """
    
    results: Optional[List[PhotoResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
