from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchRequestFacetSpec:
    r"""GoogleCloudRetailV2betaSearchRequestFacetSpec
    A facet specification to perform faceted search.
    """
    
    enable_dynamic_position: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableDynamicPosition') }})
    excluded_filter_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedFilterKeys') }})
    facet_key: Optional[GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facetKey') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    
