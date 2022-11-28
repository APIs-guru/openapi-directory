from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WarehouseBasedDeliveryTime:
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    carrier_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierService') }})
    origin_administrative_area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originAdministrativeArea') }})
    origin_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originCity') }})
    origin_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originCountry') }})
    origin_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originPostalCode') }})
    origin_street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originStreetAddress') }})
    warehouse_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouseName') }})
    
