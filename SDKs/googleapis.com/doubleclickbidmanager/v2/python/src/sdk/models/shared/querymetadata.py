from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class QueryMetadataFormatEnum(str, Enum):
    FORMAT_UNSPECIFIED = "FORMAT_UNSPECIFIED"
    CSV = "CSV"
    XLSX = "XLSX"


@dataclass_json
@dataclass
class QueryMetadata:
    r"""QueryMetadata
    Query metadata.
    """
    
    data_range: Optional[DataRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRange') }})
    format: Optional[QueryMetadataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    send_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendNotification') }})
    share_email_address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareEmailAddress') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
