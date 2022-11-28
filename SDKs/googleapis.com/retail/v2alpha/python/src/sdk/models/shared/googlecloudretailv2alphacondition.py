from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaCondition:
    r"""GoogleCloudRetailV2alphaCondition
    Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.
    """
    
    active_time_range: Optional[List[GoogleCloudRetailV2alphaConditionTimeRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeTimeRange') }})
    query_terms: Optional[List[GoogleCloudRetailV2alphaConditionQueryTerm]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryTerms') }})
    
