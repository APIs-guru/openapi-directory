from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deidentifyconfig


@dataclass_json
@dataclass
class DeidentifiedStoreDestination:
    config: Optional[deidentifyconfig.DeidentifyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'store' }})
    
