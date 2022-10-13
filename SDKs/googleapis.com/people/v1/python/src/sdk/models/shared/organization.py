from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date
from . import fieldmetadata
from . import date


@dataclass_json
@dataclass
class Organization:
    cost_center: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costCenter' }})
    current: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current' }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'department' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    end_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    formatted_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedType' }})
    full_time_equivalent_millipercent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullTimeEquivalentMillipercent' }})
    job_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDescription' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    metadata: Optional[fieldmetadata.FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phonetic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneticName' }})
    start_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbol' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
