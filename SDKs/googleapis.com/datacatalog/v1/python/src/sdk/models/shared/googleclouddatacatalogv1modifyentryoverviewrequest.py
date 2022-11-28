from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ModifyEntryOverviewRequest:
    r"""GoogleCloudDatacatalogV1ModifyEntryOverviewRequest
    Request message for ModifyEntryOverview.
    """
    
    entry_overview: Optional[GoogleCloudDatacatalogV1EntryOverview] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryOverview') }})
    
