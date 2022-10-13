from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObjectStorageSsl:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    private_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_key' }})
    
