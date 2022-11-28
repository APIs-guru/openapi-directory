from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EditGuaranteedOrderReadAccessorsRequest:
    r"""EditGuaranteedOrderReadAccessorsRequest
    Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors.
    """
    
    added_advertisers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedAdvertisers') }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    read_access_inherited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readAccessInherited') }})
    removed_advertisers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedAdvertisers') }})
    
