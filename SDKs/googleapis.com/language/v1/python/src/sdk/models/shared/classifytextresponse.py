from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClassifyTextResponse:
    r"""ClassifyTextResponse
    The document classification response message.
    """
    
    categories: Optional[List[ClassificationCategory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    
