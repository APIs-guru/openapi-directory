from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Certificate:
    auto_renew: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRenew' }})
    ca: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ca' }})
    ca_ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caRef' }})
    chain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chain' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    private_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKey' }})
    self_signed: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfSigned' }})
    subject: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    to: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    valid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid' }})
    
