from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datafeedstatuserror
from . import datafeedstatuserror


@dataclass_json
@dataclass
class DatafeedStatus:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    datafeed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datafeedId' }})
    errors: Optional[List[datafeedstatuserror.DatafeedStatusError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    items_total: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsTotal' }})
    items_valid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsValid' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    last_upload_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUploadDate' }})
    processing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingStatus' }})
    warnings: Optional[List[datafeedstatuserror.DatafeedStatusError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
