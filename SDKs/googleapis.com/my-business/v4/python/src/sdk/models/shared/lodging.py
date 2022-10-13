from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accessibility
from . import activities
from . import guestunitfeatures
from . import business
from . import livingarea
from . import connectivity
from . import families
from . import foodanddrink
from . import guestunittype
from . import healthandsafety
from . import housekeeping
from . import lodgingmetadata
from . import parking
from . import pets
from . import policies
from . import pools
from . import property
from . import services
from . import guestunitfeatures
from . import transportation
from . import wellness


@dataclass_json
@dataclass
class Lodging:
    accessibility: Optional[accessibility.Accessibility] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessibility' }})
    activities: Optional[activities.Activities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activities' }})
    all_units: Optional[guestunitfeatures.GuestUnitFeatures] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allUnits' }})
    business: Optional[business.Business] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'business' }})
    common_living_area: Optional[livingarea.LivingArea] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonLivingArea' }})
    connectivity: Optional[connectivity.Connectivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectivity' }})
    families: Optional[families.Families] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'families' }})
    food_and_drink: Optional[foodanddrink.FoodAndDrink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foodAndDrink' }})
    guest_units: Optional[List[guestunittype.GuestUnitType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestUnits' }})
    health_and_safety: Optional[healthandsafety.HealthAndSafety] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthAndSafety' }})
    housekeeping: Optional[housekeeping.Housekeeping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'housekeeping' }})
    metadata: Optional[lodgingmetadata.LodgingMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parking: Optional[parking.Parking] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parking' }})
    pets: Optional[pets.Pets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pets' }})
    policies: Optional[policies.Policies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    pools: Optional[pools.Pools] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pools' }})
    property: Optional[property.Property] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    services: Optional[services.Services] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    some_units: Optional[guestunitfeatures.GuestUnitFeatures] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'someUnits' }})
    transportation: Optional[transportation.Transportation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transportation' }})
    wellness: Optional[wellness.Wellness] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wellness' }})
    
