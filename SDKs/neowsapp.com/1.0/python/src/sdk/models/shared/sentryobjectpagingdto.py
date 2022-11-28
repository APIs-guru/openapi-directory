from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SentryObjectPagingDto:
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[PageMetaData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    sentry_objects: Optional[List[SentryImpactRiskObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentry_objects') }})
    
