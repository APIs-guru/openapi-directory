from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customertocustomercategory


@dataclass_json
@dataclass
class CustomersToCustomerCategory:
    customers: Optional[List[customertocustomercategory.CustomerToCustomerCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customers' }})
    
