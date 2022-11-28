from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Lodging:
    r"""Lodging
    Lodging of a location that provides accomodations.
    """
    
    accessibility: Optional[Accessibility] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibility') }})
    activities: Optional[Activities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    all_units: Optional[GuestUnitFeatures] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allUnits') }})
    business: Optional[Business] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business') }})
    common_living_area: Optional[LivingArea] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonLivingArea') }})
    connectivity: Optional[Connectivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectivity') }})
    families: Optional[Families] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('families') }})
    food_and_drink: Optional[FoodAndDrink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foodAndDrink') }})
    guest_units: Optional[List[GuestUnitType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestUnits') }})
    health_and_safety: Optional[HealthAndSafety] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthAndSafety') }})
    housekeeping: Optional[Housekeeping] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('housekeeping') }})
    metadata: Optional[LodgingMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parking: Optional[Parking] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parking') }})
    pets: Optional[Pets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pets') }})
    policies: Optional[Policies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    pools: Optional[Pools] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pools') }})
    property: Optional[Property] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    services: Optional[Services] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    some_units: Optional[GuestUnitFeatures] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('someUnits') }})
    transportation: Optional[Transportation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transportation') }})
    wellness: Optional[Wellness] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wellness') }})
    
