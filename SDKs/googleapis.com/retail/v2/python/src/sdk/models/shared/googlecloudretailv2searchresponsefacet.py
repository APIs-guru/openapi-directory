from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2searchresponsefacetfacetvalue


@dataclass_json
@dataclass
class GoogleCloudRetailV2SearchResponseFacet:
    dynamic_facet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicFacet' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    values: Optional[List[googlecloudretailv2searchresponsefacetfacetvalue.GoogleCloudRetailV2SearchResponseFacetFacetValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
