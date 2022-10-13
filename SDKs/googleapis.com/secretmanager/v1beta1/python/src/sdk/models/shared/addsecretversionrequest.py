from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import secretpayload


@dataclass_json
@dataclass
class AddSecretVersionRequest:
    payload: Optional[secretpayload.SecretPayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    
