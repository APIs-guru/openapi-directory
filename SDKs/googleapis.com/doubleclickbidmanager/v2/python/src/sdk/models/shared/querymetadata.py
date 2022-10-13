from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datarange

class QueryMetadataFormatEnum(str, Enum):
    FORMAT_UNSPECIFIED = "FORMAT_UNSPECIFIED"
    CSV = "CSV"
    XLSX = "XLSX"


@dataclass_json
@dataclass
class QueryMetadata:
    data_range: Optional[datarange.DataRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataRange' }})
    format: Optional[QueryMetadataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    send_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendNotification' }})
    share_email_address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shareEmailAddress' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
