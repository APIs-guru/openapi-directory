from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EditInventorySourceReadWriteAccessorsRequest:
    r"""EditInventorySourceReadWriteAccessorsRequest
    Request message for InventorySourceService.EditInventorySourceReadWriteAccessors.
    """
    
    advertisers_update: Optional[EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertisersUpdate') }})
    assign_partner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignPartner') }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    
