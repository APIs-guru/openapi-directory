from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textentry
from . import textentry


@dataclass_json
@dataclass
class ArticleAndParentComment:
    article: Optional[textentry.TextEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'article' }})
    parent_comment: Optional[textentry.TextEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentComment' }})
    
