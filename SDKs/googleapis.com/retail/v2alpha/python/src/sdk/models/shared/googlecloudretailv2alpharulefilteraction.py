from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaRuleFilterAction:
    r"""GoogleCloudRetailV2alphaRuleFilterAction
    * Rule Condition: - No Condition.query_terms provided is a global match. - 1 or more Condition.query_terms provided are combined with OR operator. * Action Input: The request query and filter that are applied to the retrieved products, in addition to any filters already provided with the SearchRequest. The AND operator is used to combine the query's existing filters with the filter rule(s). NOTE: May result in 0 results when filters conflict. * Action Result: Filters the returned objects to be ONLY those that passed the filter.
    """
    
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    
