from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphasearchrequestboostspec
from . import googlecloudretailv2alphasearchrequestdynamicfacetspec
from . import googlecloudretailv2alphasearchrequestfacetspec
from . import googlecloudretailv2alphasearchrequestpersonalizationspec
from . import googlecloudretailv2alphasearchrequestqueryexpansionspec
from . import googlecloudretailv2alphasearchrequestspellcorrectionspec
from . import googlecloudretailv2alphauserinfo

class GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum(str, Enum):
    RELEVANCE_THRESHOLD_UNSPECIFIED = "RELEVANCE_THRESHOLD_UNSPECIFIED"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    LOWEST = "LOWEST"

class GoogleCloudRetailV2alphaSearchRequestSearchModeEnum(str, Enum):
    SEARCH_MODE_UNSPECIFIED = "SEARCH_MODE_UNSPECIFIED"
    PRODUCT_SEARCH_ONLY = "PRODUCT_SEARCH_ONLY"
    FACETED_SEARCH_ONLY = "FACETED_SEARCH_ONLY"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchRequest:
    boost_spec: Optional[googlecloudretailv2alphasearchrequestboostspec.GoogleCloudRetailV2alphaSearchRequestBoostSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boostSpec' }})
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    canonical_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalFilter' }})
    dynamic_facet_spec: Optional[googlecloudretailv2alphasearchrequestdynamicfacetspec.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicFacetSpec' }})
    facet_specs: Optional[List[googlecloudretailv2alphasearchrequestfacetspec.GoogleCloudRetailV2alphaSearchRequestFacetSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facetSpecs' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    page_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageCategories' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    personalization_spec: Optional[googlecloudretailv2alphasearchrequestpersonalizationspec.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalizationSpec' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    query_expansion_spec: Optional[googlecloudretailv2alphasearchrequestqueryexpansionspec.GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryExpansionSpec' }})
    relevance_threshold: Optional[GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relevanceThreshold' }})
    search_mode: Optional[GoogleCloudRetailV2alphaSearchRequestSearchModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchMode' }})
    spell_correction_spec: Optional[googlecloudretailv2alphasearchrequestspellcorrectionspec.GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spellCorrectionSpec' }})
    user_info: Optional[googlecloudretailv2alphauserinfo.GoogleCloudRetailV2alphaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfo' }})
    variant_rollup_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variantRollupKeys' }})
    visitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visitorId' }})
    
