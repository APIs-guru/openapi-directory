from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRetailV2SearchRequestSearchModeEnum(str, Enum):
    SEARCH_MODE_UNSPECIFIED = "SEARCH_MODE_UNSPECIFIED"
    PRODUCT_SEARCH_ONLY = "PRODUCT_SEARCH_ONLY"
    FACETED_SEARCH_ONLY = "FACETED_SEARCH_ONLY"


@dataclass_json
@dataclass
class GoogleCloudRetailV2SearchRequest:
    r"""GoogleCloudRetailV2SearchRequest
    Request message for SearchService.Search method.
    """
    
    boost_spec: Optional[GoogleCloudRetailV2SearchRequestBoostSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boostSpec') }})
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    canonical_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalFilter') }})
    dynamic_facet_spec: Optional[GoogleCloudRetailV2SearchRequestDynamicFacetSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicFacetSpec') }})
    facet_specs: Optional[List[GoogleCloudRetailV2SearchRequestFacetSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facetSpecs') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    page_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCategories') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    personalization_spec: Optional[GoogleCloudRetailV2SearchRequestPersonalizationSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalizationSpec') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    query_expansion_spec: Optional[GoogleCloudRetailV2SearchRequestQueryExpansionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryExpansionSpec') }})
    search_mode: Optional[GoogleCloudRetailV2SearchRequestSearchModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchMode') }})
    spell_correction_spec: Optional[GoogleCloudRetailV2SearchRequestSpellCorrectionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spellCorrectionSpec') }})
    user_info: Optional[GoogleCloudRetailV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    variant_rollup_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantRollupKeys') }})
    visitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visitorId') }})
    
