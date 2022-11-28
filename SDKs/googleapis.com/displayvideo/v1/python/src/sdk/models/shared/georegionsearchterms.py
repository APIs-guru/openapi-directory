from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GeoRegionSearchTerms:
    r"""GeoRegionSearchTerms
    Search terms for geo region targeting options.
    """
    
    geo_region_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegionQuery') }})
    
