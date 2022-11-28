from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BillStageSittingPublicationList:
    publications: Optional[List[Publication]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publications') }})
    sitting_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sittingId') }})
    
