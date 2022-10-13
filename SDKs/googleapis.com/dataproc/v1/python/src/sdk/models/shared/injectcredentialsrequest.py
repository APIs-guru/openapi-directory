from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InjectCredentialsRequest:
    cluster_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterUuid' }})
    credentials_ciphertext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentialsCiphertext' }})
    
