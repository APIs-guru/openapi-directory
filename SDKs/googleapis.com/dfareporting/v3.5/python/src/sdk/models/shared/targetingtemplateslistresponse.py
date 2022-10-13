from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetingtemplate


@dataclass_json
@dataclass
class TargetingTemplatesListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    targeting_templates: Optional[List[targetingtemplate.TargetingTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingTemplates' }})
    
