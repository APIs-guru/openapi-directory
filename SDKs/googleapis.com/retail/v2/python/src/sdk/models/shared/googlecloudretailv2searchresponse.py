from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2searchresponsefacet
from . import googlecloudretailv2searchrequestboostspecconditionboostspec
from . import googlecloudretailv2searchresponsequeryexpansioninfo
from . import googlecloudretailv2searchresponsesearchresult


@dataclass_json
@dataclass
class GoogleCloudRetailV2SearchResponse:
    applied_controls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedControls' }})
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionToken' }})
    corrected_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctedQuery' }})
    facets: Optional[List[googlecloudretailv2searchresponsefacet.GoogleCloudRetailV2SearchResponseFacet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facets' }})
    invalid_condition_boost_specs: Optional[List[googlecloudretailv2searchrequestboostspecconditionboostspec.GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidConditionBoostSpecs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    query_expansion_info: Optional[googlecloudretailv2searchresponsequeryexpansioninfo.GoogleCloudRetailV2SearchResponseQueryExpansionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryExpansionInfo' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUri' }})
    results: Optional[List[googlecloudretailv2searchresponsesearchresult.GoogleCloudRetailV2SearchResponseSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
