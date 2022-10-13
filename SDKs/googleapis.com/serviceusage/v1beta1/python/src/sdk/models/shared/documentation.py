from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import page
from . import documentationrule


@dataclass_json
@dataclass
class Documentation:
    documentation_root_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentationRootUrl' }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overview' }})
    pages: Optional[List[page.Page]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    rules: Optional[List[documentationrule.DocumentationRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    service_root_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRootUrl' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
