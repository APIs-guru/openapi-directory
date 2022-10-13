from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betasearchrequestboostspec
from . import googlecloudretailv2betasearchrequestdynamicfacetspec
from . import googlecloudretailv2betasearchrequestfacetspec
from . import googlecloudretailv2betasearchrequestpersonalizationspec
from . import googlecloudretailv2betasearchrequestqueryexpansionspec
from . import googlecloudretailv2betasearchrequestspellcorrectionspec
from . import googlecloudretailv2betauserinfo

class GoogleCloudRetailV2betaSearchRequestSearchModeEnum(str, Enum):
    SEARCH_MODE_UNSPECIFIED = "SEARCH_MODE_UNSPECIFIED"
    PRODUCT_SEARCH_ONLY = "PRODUCT_SEARCH_ONLY"
    FACETED_SEARCH_ONLY = "FACETED_SEARCH_ONLY"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchRequest:
    boost_spec: Optional[googlecloudretailv2betasearchrequestboostspec.GoogleCloudRetailV2betaSearchRequestBoostSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boostSpec' }})
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    canonical_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalFilter' }})
    dynamic_facet_spec: Optional[googlecloudretailv2betasearchrequestdynamicfacetspec.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicFacetSpec' }})
    facet_specs: Optional[List[googlecloudretailv2betasearchrequestfacetspec.GoogleCloudRetailV2betaSearchRequestFacetSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facetSpecs' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    page_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageCategories' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    personalization_spec: Optional[googlecloudretailv2betasearchrequestpersonalizationspec.GoogleCloudRetailV2betaSearchRequestPersonalizationSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalizationSpec' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    query_expansion_spec: Optional[googlecloudretailv2betasearchrequestqueryexpansionspec.GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryExpansionSpec' }})
    search_mode: Optional[GoogleCloudRetailV2betaSearchRequestSearchModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchMode' }})
    spell_correction_spec: Optional[googlecloudretailv2betasearchrequestspellcorrectionspec.GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spellCorrectionSpec' }})
    user_info: Optional[googlecloudretailv2betauserinfo.GoogleCloudRetailV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfo' }})
    variant_rollup_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variantRollupKeys' }})
    visitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visitorId' }})
    
