from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BitbucketServerRepositoryID:
    project_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectKey' }})
    repo_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repoSlug' }})
    webhook_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookId' }})
    
