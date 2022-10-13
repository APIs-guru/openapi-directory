from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import processsignature


@dataclass_json
@dataclass
class Indicator:
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddresses' }})
    signatures: Optional[List[processsignature.ProcessSignature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatures' }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uris' }})
    
