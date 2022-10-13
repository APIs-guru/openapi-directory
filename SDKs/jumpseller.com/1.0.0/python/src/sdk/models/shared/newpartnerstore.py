from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NewPartnerStoreStore:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    email_partner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_partner' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_url' }})
    

@dataclass_json
@dataclass
class NewPartnerStore:
    store: Optional[NewPartnerStoreStore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'store' }})
    
