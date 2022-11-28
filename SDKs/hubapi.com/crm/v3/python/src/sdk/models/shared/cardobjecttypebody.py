from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CardObjectTypeBodyNameEnum(str, Enum):
    CONTACTS = "contacts"
    DEALS = "deals"
    COMPANIES = "companies"
    TICKETS = "tickets"


@dataclass_json
@dataclass
class CardObjectTypeBody:
    name: CardObjectTypeBodyNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties_to_send: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertiesToSend') }})
    
