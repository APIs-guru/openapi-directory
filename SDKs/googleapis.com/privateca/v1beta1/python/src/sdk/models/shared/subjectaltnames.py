from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import x509extension


@dataclass_json
@dataclass
class SubjectAltNames:
    custom_sans: Optional[List[x509extension.X509Extension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customSans' }})
    dns_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsNames' }})
    email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddresses' }})
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddresses' }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uris' }})
    
