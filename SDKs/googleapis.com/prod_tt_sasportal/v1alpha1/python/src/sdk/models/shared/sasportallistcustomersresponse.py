from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sasportalcustomer


@dataclass_json
@dataclass
class SasPortalListCustomersResponse:
    customers: Optional[List[sasportalcustomer.SasPortalCustomer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
