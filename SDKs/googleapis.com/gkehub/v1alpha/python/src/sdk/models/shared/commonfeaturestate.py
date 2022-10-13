from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import appdevexperiencefeaturestate
from . import servicemeshfeaturestate
from . import featurestate


@dataclass_json
@dataclass
class CommonFeatureState:
    appdevexperience: Optional[appdevexperiencefeaturestate.AppDevExperienceFeatureState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appdevexperience' }})
    servicemesh: Optional[servicemeshfeaturestate.ServiceMeshFeatureState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicemesh' }})
    state: Optional[featurestate.FeatureState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
