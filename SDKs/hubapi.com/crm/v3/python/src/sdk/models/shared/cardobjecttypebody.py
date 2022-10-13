from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json

class CardObjectTypeBodyNameEnum(str, Enum):
    CONTACTS = "contacts"
    DEALS = "deals"
    COMPANIES = "companies"
    TICKETS = "tickets"


@dataclass_json
@dataclass
class CardObjectTypeBody:
    name: CardObjectTypeBodyNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties_to_send: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertiesToSend' }})
    
