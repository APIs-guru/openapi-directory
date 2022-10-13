from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dnskey
from . import dnskey


@dataclass_json
@dataclass
class OperationDNSKeyContext:
    new_value: Optional[dnskey.DNSKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newValue' }})
    old_value: Optional[dnskey.DNSKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldValue' }})
    
