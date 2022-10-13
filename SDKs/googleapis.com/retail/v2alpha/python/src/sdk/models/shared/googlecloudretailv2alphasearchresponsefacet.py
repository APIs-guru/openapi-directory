from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphasearchresponsefacetfacetvalue


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchResponseFacet:
    dynamic_facet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicFacet' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    values: Optional[List[googlecloudretailv2alphasearchresponsefacetfacetvalue.GoogleCloudRetailV2alphaSearchResponseFacetFacetValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
