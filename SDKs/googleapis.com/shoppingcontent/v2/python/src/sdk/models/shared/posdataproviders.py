from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import posdataprovidersposdataprovider


@dataclass_json
@dataclass
class PosDataProviders:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    pos_data_providers: Optional[List[posdataprovidersposdataprovider.PosDataProvidersPosDataProvider]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posDataProviders' }})
    
