from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import applianceversion
from . import applianceversion


@dataclass_json
@dataclass
class AvailableUpdates:
    in_place_update: Optional[applianceversion.ApplianceVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inPlaceUpdate' }})
    new_deployable_appliance: Optional[applianceversion.ApplianceVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newDeployableAppliance' }})
    
