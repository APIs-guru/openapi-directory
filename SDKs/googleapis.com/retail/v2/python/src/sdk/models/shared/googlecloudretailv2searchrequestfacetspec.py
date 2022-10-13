from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2searchrequestfacetspecfacetkey


@dataclass_json
@dataclass
class GoogleCloudRetailV2SearchRequestFacetSpec:
    enable_dynamic_position: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableDynamicPosition' }})
    excluded_filter_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedFilterKeys' }})
    facet_key: Optional[googlecloudretailv2searchrequestfacetspecfacetkey.GoogleCloudRetailV2SearchRequestFacetSpecFacetKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facetKey' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    
