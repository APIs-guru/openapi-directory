from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import businesschainsearchterms
from . import georegionsearchterms
from . import poisearchterms


@dataclass_json
@dataclass
class SearchTargetingOptionsRequest:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    business_chain_search_terms: Optional[businesschainsearchterms.BusinessChainSearchTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessChainSearchTerms' }})
    geo_region_search_terms: Optional[georegionsearchterms.GeoRegionSearchTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoRegionSearchTerms' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    poi_search_terms: Optional[poisearchterms.PoiSearchTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poiSearchTerms' }})
    
