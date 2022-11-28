from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductSearchResults:
    r"""ProductSearchResults
    Results for a product search request.
    """
    
    index_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexTime') }})
    product_grouped_results: Optional[List[GroupedResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productGroupedResults') }})
    results: Optional[List[Result]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
