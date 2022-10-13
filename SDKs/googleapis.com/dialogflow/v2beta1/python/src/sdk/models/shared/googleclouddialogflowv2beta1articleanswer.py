from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ArticleAnswer:
    answer_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerRecord' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    snippets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippets' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
