from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlefirestoreadminv1beta2indexconfig


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta2Field:
    index_config: Optional[googlefirestoreadminv1beta2indexconfig.GoogleFirestoreAdminV1beta2IndexConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
