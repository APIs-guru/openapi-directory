from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betainterval


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey:
    case_insensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseInsensitive' }})
    contains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contains' }})
    intervals: Optional[List[googlecloudretailv2betainterval.GoogleCloudRetailV2betaInterval]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervals' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefixes' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    restricted_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedValues' }})
    return_min_max: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnMinMax' }})
    
