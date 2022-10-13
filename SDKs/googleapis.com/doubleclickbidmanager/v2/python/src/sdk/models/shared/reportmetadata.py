from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date
from . import date
from . import reportstatus


@dataclass_json
@dataclass
class ReportMetadata:
    google_cloud_storage_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleCloudStoragePath' }})
    report_data_end_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDataEndDate' }})
    report_data_start_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDataStartDate' }})
    status: Optional[reportstatus.ReportStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
