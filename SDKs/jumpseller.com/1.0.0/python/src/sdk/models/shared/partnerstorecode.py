from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PartnerStoreCodeStore:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    

@dataclass_json
@dataclass
class PartnerStoreCode:
    store: Optional[PartnerStoreCodeStore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('store') }})
    
