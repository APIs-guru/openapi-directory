from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import testordercustomermarketingrightsinfo


@dataclass_json
@dataclass
class TestOrderCustomer:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    explicit_marketing_preference: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicitMarketingPreference' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    marketing_rights_info: Optional[testordercustomermarketingrightsinfo.TestOrderCustomerMarketingRightsInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketingRightsInfo' }})
    
