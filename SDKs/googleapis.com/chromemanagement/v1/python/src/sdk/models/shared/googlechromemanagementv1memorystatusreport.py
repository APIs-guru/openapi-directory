from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromeManagementV1MemoryStatusReport:
    page_faults: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageFaults' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    sample_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleFrequency' }})
    system_ram_free_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemRamFreeBytes' }})
    
