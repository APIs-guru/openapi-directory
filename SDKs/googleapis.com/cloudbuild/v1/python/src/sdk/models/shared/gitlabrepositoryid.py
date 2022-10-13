from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GitLabRepositoryID:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    webhook_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookId' }})
    
