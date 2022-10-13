from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1httpslatencyroutinedata


@dataclass_json
@dataclass
class GoogleChromeManagementV1NetworkDiagnosticsReport:
    https_latency_data: Optional[googlechromemanagementv1httpslatencyroutinedata.GoogleChromeManagementV1HTTPSLatencyRoutineData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpsLatencyData' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    
