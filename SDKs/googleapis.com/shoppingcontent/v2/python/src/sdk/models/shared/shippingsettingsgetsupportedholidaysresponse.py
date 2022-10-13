from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import holidaysholiday


@dataclass_json
@dataclass
class ShippingsettingsGetSupportedHolidaysResponse:
    holidays: Optional[List[holidaysholiday.HolidaysHoliday]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holidays' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
