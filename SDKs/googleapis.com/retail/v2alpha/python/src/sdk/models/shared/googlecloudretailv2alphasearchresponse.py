from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphasearchresponsefacet
from . import googlecloudretailv2alphasearchrequestboostspecconditionboostspec
from . import googlecloudretailv2alphasearchresponsequeryexpansioninfo
from . import googlecloudretailv2alphasearchresponsesearchresult


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchResponse:
    applied_controls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedControls' }})
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionToken' }})
    corrected_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctedQuery' }})
    facets: Optional[List[googlecloudretailv2alphasearchresponsefacet.GoogleCloudRetailV2alphaSearchResponseFacet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facets' }})
    invalid_condition_boost_specs: Optional[List[googlecloudretailv2alphasearchrequestboostspecconditionboostspec.GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidConditionBoostSpecs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    query_expansion_info: Optional[googlecloudretailv2alphasearchresponsequeryexpansioninfo.GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryExpansionInfo' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUri' }})
    results: Optional[List[googlecloudretailv2alphasearchresponsesearchresult.GoogleCloudRetailV2alphaSearchResponseSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
