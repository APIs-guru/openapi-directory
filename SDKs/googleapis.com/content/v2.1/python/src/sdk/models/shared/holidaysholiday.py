from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HolidaysHoliday:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    delivery_guarantee_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryGuaranteeDate' }})
    delivery_guarantee_hour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryGuaranteeHour' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
