from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deliveryareapostalcoderange


@dataclass_json
@dataclass
class DeliveryArea:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    postal_code_range: Optional[deliveryareapostalcoderange.DeliveryAreaPostalCodeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCodeRange' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    
