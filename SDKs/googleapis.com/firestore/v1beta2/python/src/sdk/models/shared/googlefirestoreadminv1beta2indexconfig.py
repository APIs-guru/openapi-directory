from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirestoreadminv1beta2index


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta2IndexConfig:
    ancestor_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ancestorField' }})
    indexes: Optional[List[googlefirestoreadminv1beta2index.GoogleFirestoreAdminV1beta2Index]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexes' }})
    reverting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reverting' }})
    uses_ancestor_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usesAncestorConfig' }})
    
