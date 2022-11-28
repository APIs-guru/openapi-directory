from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListHl7V2StoresResponse:
    r"""ListHl7V2StoresResponse
    Lists the HL7v2 stores in the given dataset.
    """
    
    hl7_v2_stores: Optional[List[Hl7V2Store]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hl7V2Stores') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
