from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simpleaddresstype
from . import source


@dataclass_json
@dataclass
class PollingLocation:
    address: Optional[simpleaddresstype.SimpleAddressType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    polling_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pollingHours' }})
    sources: Optional[List[source.Source]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    voter_services: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voterServices' }})
    
