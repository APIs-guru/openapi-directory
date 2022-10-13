from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DomainSetupInfo:
    supports_ssl_externally: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsSslExternally' }})
    who_is_email_addresses: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'whoIsEmailAddresses' }})
    
