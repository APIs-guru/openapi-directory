from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APICounterV2Out:
    r"""APICounterV2Out
    Detailed usage as reported by the deduplicating API counter.
    """
    
    api_key: Optional[APIKeyOut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    api_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiService') }})
    created_date_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDateTime') }})
    last_flushed_date_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastFlushedDateTime') }})
    last_used_date_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUsedDateTime') }})
    service_features_usage: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceFeaturesUsage') }})
    total_usage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalUsage') }})
    
