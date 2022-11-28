from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PoiSearchTerms:
    r"""PoiSearchTerms
    Search terms for POI targeting options.
    """
    
    poi_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiQuery') }})
    
