from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pickupservicespickupservice


@dataclass_json
@dataclass
class ShippingsettingsGetSupportedPickupServicesResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    pickup_services: Optional[List[pickupservicespickupservice.PickupServicesPickupService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupServices' }})
    
