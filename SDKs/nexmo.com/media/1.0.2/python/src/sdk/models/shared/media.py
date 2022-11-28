from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Media:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_downloads_allowed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_downloads_allowed') }})
    media_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_size') }})
    metadata_primary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata_primary') }})
    metadata_secondary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata_secondary') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mime_type') }})
    original_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_file_name') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('store_id') }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_created') }})
    time_last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_last_updated') }})
    times_downloaded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('times_downloaded') }})
    
