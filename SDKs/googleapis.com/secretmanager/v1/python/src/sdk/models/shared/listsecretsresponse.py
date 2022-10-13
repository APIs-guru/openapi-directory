from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import secret


@dataclass_json
@dataclass
class ListSecretsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    secrets: Optional[List[secret.Secret]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
