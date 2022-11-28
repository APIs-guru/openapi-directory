from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1BusinessContext:
    r"""GoogleCloudDatacatalogV1BusinessContext
    Business Context of the entry.
    """
    
    contacts: Optional[GoogleCloudDatacatalogV1Contacts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    entry_overview: Optional[GoogleCloudDatacatalogV1EntryOverview] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryOverview') }})
    
