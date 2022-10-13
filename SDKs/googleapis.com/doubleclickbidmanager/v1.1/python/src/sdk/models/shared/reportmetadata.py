from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reportstatus


@dataclass_json
@dataclass
class ReportMetadata:
    google_cloud_storage_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleCloudStoragePath' }})
    report_data_end_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDataEndTimeMs' }})
    report_data_start_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDataStartTimeMs' }})
    status: Optional[reportstatus.ReportStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
