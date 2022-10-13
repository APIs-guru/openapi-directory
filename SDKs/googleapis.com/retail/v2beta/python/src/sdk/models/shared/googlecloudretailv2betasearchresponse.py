from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betasearchresponsefacet
from . import googlecloudretailv2betasearchrequestboostspecconditionboostspec
from . import googlecloudretailv2betasearchresponsequeryexpansioninfo
from . import googlecloudretailv2betasearchresponsesearchresult


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchResponse:
    applied_controls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedControls' }})
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionToken' }})
    corrected_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctedQuery' }})
    facets: Optional[List[googlecloudretailv2betasearchresponsefacet.GoogleCloudRetailV2betaSearchResponseFacet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facets' }})
    invalid_condition_boost_specs: Optional[List[googlecloudretailv2betasearchrequestboostspecconditionboostspec.GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidConditionBoostSpecs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    query_expansion_info: Optional[googlecloudretailv2betasearchresponsequeryexpansioninfo.GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryExpansionInfo' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUri' }})
    results: Optional[List[googlecloudretailv2betasearchresponsesearchresult.GoogleCloudRetailV2betaSearchResponseSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
