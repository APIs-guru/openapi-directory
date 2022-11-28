from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1Contacts:
    r"""GoogleCloudDatacatalogV1Contacts
    Contact people for the entry.
    """
    
    people: Optional[List[GoogleCloudDatacatalogV1ContactsPerson]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('people') }})
    
