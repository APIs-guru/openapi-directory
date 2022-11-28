from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RecipientDeliveryTypeEnum(str, Enum):
    LINK = "LINK"
    ATTACHMENT = "ATTACHMENT"


@dataclass_json
@dataclass
class Recipient:
    r"""Recipient
    Represents a recipient.
    """
    
    delivery_type: Optional[RecipientDeliveryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryType') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
