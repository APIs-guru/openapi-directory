from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import reportrequest


@dataclass_json
@dataclass
class ReportFiles:
    byte_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byteCount' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Report:
    files: Optional[List[ReportFiles]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_report_ready: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isReportReady' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    request: Optional[reportrequest.ReportRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowCount' }})
    rows: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    statistics_currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statisticsCurrencyCode' }})
    statistics_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statisticsTimeZone' }})
    
