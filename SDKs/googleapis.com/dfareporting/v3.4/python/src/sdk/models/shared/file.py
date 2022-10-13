from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import daterange

class FileFormatEnum(str, Enum):
    CSV = "CSV"
    EXCEL = "EXCEL"

class FileStatusEnum(str, Enum):
    PROCESSING = "PROCESSING"
    REPORT_AVAILABLE = "REPORT_AVAILABLE"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class FileUrls:
    api_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiUrl' }})
    browser_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browserUrl' }})
    

@dataclass_json
@dataclass
class File:
    date_range: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRange' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    format: Optional[FileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime' }})
    report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportId' }})
    status: Optional[FileStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    urls: Optional[FileUrls] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urls' }})
    
