from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1EntryOverview:
    r"""GoogleCloudDatacatalogV1EntryOverview
    Entry overview fields for rich text descriptions of entries.
    """
    
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overview') }})
    
