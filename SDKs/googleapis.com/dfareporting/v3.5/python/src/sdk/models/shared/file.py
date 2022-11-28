from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""FileUrls
    The URLs where the completed report file can be downloaded.
    """
    
    api_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiUrl') }})
    browser_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserUrl') }})
    

@dataclass_json
@dataclass
class File:
    r"""File
    Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is \"REPORT_AVAILABLE\".
    """
    
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    format: Optional[FileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportId') }})
    status: Optional[FileStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    urls: Optional[FileUrls] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    
