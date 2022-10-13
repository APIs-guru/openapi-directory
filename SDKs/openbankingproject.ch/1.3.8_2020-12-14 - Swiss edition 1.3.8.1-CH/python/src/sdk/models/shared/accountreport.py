from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import transactions
from . import transactions
from . import transactions


@dataclass_json
@dataclass
class AccountReport:
    links: dict[str, hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    booked: Optional[List[transactions.Transactions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booked' }})
    information: Optional[List[transactions.Transactions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'information' }})
    pending: Optional[List[transactions.Transactions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    
