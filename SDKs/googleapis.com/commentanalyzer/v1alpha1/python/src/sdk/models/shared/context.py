from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import articleandparentcomment
from . import textentry


@dataclass_json
@dataclass
class Context:
    article_and_parent_comment: Optional[articleandparentcomment.ArticleAndParentComment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleAndParentComment' }})
    entries: Optional[List[textentry.TextEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    
