from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2searchrequestboostspec
from . import googlecloudretailv2searchrequestdynamicfacetspec
from . import googlecloudretailv2searchrequestfacetspec
from . import googlecloudretailv2searchrequestpersonalizationspec
from . import googlecloudretailv2searchrequestqueryexpansionspec
from . import googlecloudretailv2searchrequestspellcorrectionspec
from . import googlecloudretailv2userinfo

class GoogleCloudRetailV2SearchRequestSearchModeEnum(str, Enum):
    SEARCH_MODE_UNSPECIFIED = "SEARCH_MODE_UNSPECIFIED"
    PRODUCT_SEARCH_ONLY = "PRODUCT_SEARCH_ONLY"
    FACETED_SEARCH_ONLY = "FACETED_SEARCH_ONLY"


@dataclass_json
@dataclass
class GoogleCloudRetailV2SearchRequest:
    boost_spec: Optional[googlecloudretailv2searchrequestboostspec.GoogleCloudRetailV2SearchRequestBoostSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boostSpec' }})
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    canonical_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalFilter' }})
    dynamic_facet_spec: Optional[googlecloudretailv2searchrequestdynamicfacetspec.GoogleCloudRetailV2SearchRequestDynamicFacetSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicFacetSpec' }})
    facet_specs: Optional[List[googlecloudretailv2searchrequestfacetspec.GoogleCloudRetailV2SearchRequestFacetSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facetSpecs' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    page_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageCategories' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    personalization_spec: Optional[googlecloudretailv2searchrequestpersonalizationspec.GoogleCloudRetailV2SearchRequestPersonalizationSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalizationSpec' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    query_expansion_spec: Optional[googlecloudretailv2searchrequestqueryexpansionspec.GoogleCloudRetailV2SearchRequestQueryExpansionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryExpansionSpec' }})
    search_mode: Optional[GoogleCloudRetailV2SearchRequestSearchModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchMode' }})
    spell_correction_spec: Optional[googlecloudretailv2searchrequestspellcorrectionspec.GoogleCloudRetailV2SearchRequestSpellCorrectionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spellCorrectionSpec' }})
    user_info: Optional[googlecloudretailv2userinfo.GoogleCloudRetailV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfo' }})
    variant_rollup_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variantRollupKeys' }})
    visitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visitorId' }})
    
