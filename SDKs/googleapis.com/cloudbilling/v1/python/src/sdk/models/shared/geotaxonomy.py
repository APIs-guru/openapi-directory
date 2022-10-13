from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GeoTaxonomyTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    GLOBAL = "GLOBAL"
    REGIONAL = "REGIONAL"
    MULTI_REGIONAL = "MULTI_REGIONAL"


@dataclass_json
@dataclass
class GeoTaxonomy:
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    type: Optional[GeoTaxonomyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
