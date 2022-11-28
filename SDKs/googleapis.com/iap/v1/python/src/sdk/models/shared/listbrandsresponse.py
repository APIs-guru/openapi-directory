from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBrandsResponse:
    r"""ListBrandsResponse
    Response message for ListBrands.
    """
    
    brands: Optional[List[Brand]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brands') }})
    
