from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import category
from . import identity


@dataclass_json
@dataclass
class WindowsUpdate:
    categories: Optional[List[category.Category]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    identity: Optional[identity.Identity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    kb_article_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kbArticleIds' }})
    last_published_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastPublishedTimestamp' }})
    support_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportUrl' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
