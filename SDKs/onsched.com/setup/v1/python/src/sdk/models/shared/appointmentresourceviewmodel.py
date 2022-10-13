from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppointmentResourceViewModel:
    appointment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appointmentId' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    
