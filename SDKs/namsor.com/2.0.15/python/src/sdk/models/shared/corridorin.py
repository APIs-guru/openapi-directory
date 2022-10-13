from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firstlastnamegeoin
from . import firstlastnamegeoin


@dataclass_json
@dataclass
class CorridorIn:
    first_last_name_geo_from: Optional[firstlastnamegeoin.FirstLastNameGeoIn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstLastNameGeoFrom' }})
    first_last_name_geo_to: Optional[firstlastnamegeoin.FirstLastNameGeoIn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstLastNameGeoTo' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
