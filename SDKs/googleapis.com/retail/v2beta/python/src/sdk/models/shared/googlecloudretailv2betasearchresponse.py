from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchResponse:
    r"""GoogleCloudRetailV2betaSearchResponse
    Response message for SearchService.Search method.
    """
    
    applied_controls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedControls') }})
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributionToken') }})
    corrected_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctedQuery') }})
    facets: Optional[List[GoogleCloudRetailV2betaSearchResponseFacet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facets') }})
    invalid_condition_boost_specs: Optional[List[GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalidConditionBoostSpecs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    query_expansion_info: Optional[GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryExpansionInfo') }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUri') }})
    results: Optional[List[GoogleCloudRetailV2betaSearchResponseSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
