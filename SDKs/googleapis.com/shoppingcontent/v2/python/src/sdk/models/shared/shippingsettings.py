from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import postalcodegroup
from . import service
from . import warehouse


@dataclass_json
@dataclass
class ShippingSettings:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    postal_code_groups: Optional[List[postalcodegroup.PostalCodeGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCodeGroups' }})
    services: Optional[List[service.Service]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    warehouses: Optional[List[warehouse.Warehouse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warehouses' }})
    
