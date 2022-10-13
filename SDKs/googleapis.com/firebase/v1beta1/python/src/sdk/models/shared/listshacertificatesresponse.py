from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import shacertificate


@dataclass_json
@dataclass
class ListShaCertificatesResponse:
    certificates: Optional[List[shacertificate.ShaCertificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    
