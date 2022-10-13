from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import floodlightconfiguration


@dataclass_json
@dataclass
class FloodlightConfigurationsListResponse:
    floodlight_configurations: Optional[List[floodlightconfiguration.FloodlightConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightConfigurations' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
