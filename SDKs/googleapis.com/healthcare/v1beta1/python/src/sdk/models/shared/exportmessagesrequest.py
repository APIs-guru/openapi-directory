from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gcsdestination


@dataclass_json
@dataclass
class ExportMessagesRequest:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    gcs_destination: Optional[gcsdestination.GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
