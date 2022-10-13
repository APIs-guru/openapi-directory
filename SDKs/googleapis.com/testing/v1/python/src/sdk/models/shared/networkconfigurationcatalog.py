from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import networkconfiguration


@dataclass_json
@dataclass
class NetworkConfigurationCatalog:
    configurations: Optional[List[networkconfiguration.NetworkConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurations' }})
    
