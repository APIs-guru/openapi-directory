from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkCheckRequest:
    r"""BulkCheckRequest
    Message used to check for the existence of multiple digital asset links within a single RPC.
    """
    
    allow_google_internal_data_sources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowGoogleInternalDataSources') }})
    default_relation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultRelation') }})
    default_source: Optional[Asset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSource') }})
    default_target: Optional[Asset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultTarget') }})
    skip_cache_lookup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipCacheLookup') }})
    statements: Optional[List[StatementTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statements') }})
    
