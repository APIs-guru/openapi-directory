from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirestoreadminv1database


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1ListDatabasesResponse:
    databases: Optional[List[googlefirestoreadminv1database.GoogleFirestoreAdminV1Database]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databases' }})
    
