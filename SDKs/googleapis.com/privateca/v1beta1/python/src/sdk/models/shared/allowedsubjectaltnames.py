from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AllowedSubjectAltNames:
    allow_custom_sans: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowCustomSans' }})
    allow_globbing_dns_wildcards: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowGlobbingDnsWildcards' }})
    allowed_dns_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedDnsNames' }})
    allowed_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedEmailAddresses' }})
    allowed_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedIps' }})
    allowed_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedUris' }})
    
