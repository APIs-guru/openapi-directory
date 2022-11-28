from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CorridorIn:
    r"""CorridorIn
    Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel
    """
    
    first_last_name_geo_from: Optional[FirstLastNameGeoIn] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstLastNameGeoFrom') }})
    first_last_name_geo_to: Optional[FirstLastNameGeoIn] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstLastNameGeoTo') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
