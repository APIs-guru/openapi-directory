from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GeoTaxonomyTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    GLOBAL = "GLOBAL"
    REGIONAL = "REGIONAL"
    MULTI_REGIONAL = "MULTI_REGIONAL"


@dataclass_json
@dataclass
class GeoTaxonomy:
    r"""GeoTaxonomy
    Encapsulates the geographic taxonomy data for a sku.
    """
    
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    type: Optional[GeoTaxonomyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
