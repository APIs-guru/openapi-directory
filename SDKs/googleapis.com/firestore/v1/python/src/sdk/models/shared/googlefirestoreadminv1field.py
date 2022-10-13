from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlefirestoreadminv1indexconfig
from . import googlefirestoreadminv1ttlconfig


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1Field:
    index_config: Optional[googlefirestoreadminv1indexconfig.GoogleFirestoreAdminV1IndexConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ttl_config: Optional[googlefirestoreadminv1ttlconfig.GoogleFirestoreAdminV1TTLConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttlConfig' }})
    
