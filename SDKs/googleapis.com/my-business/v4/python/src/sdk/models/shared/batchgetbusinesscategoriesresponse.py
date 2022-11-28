from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetBusinessCategoriesResponse:
    r"""BatchGetBusinessCategoriesResponse
    Response message for BusinessCategories.BatchGetBusinessCategories.
    """
    
    categories: Optional[List[Category]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    
