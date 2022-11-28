from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrailerInfoRemoteSearchQuery:
    include_disabled_providers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeDisabledProviders') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemId') }})
    search_info: Optional[TrailerInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchInfo') }})
    search_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchProviderName') }})
    
