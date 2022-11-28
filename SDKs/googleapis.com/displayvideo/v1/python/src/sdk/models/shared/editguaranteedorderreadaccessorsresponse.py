from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EditGuaranteedOrderReadAccessorsResponse:
    read_access_inherited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readAccessInherited') }})
    read_advertiser_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readAdvertiserIds') }})
    
