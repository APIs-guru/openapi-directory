from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1ProductSearchResults:
    r"""GoogleCloudVisionV1p2beta1ProductSearchResults
    Results for a product search request.
    """
    
    index_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexTime') }})
    product_grouped_results: Optional[List[GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productGroupedResults') }})
    results: Optional[List[GoogleCloudVisionV1p2beta1ProductSearchResultsResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
