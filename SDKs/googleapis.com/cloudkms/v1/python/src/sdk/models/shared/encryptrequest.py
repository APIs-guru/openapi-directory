from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EncryptRequest:
    additional_authenticated_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalAuthenticatedData' }})
    additional_authenticated_data_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalAuthenticatedDataCrc32c' }})
    plaintext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plaintext' }})
    plaintext_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plaintextCrc32c' }})
    
