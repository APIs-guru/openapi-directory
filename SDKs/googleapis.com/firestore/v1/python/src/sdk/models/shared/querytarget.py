from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import structuredquery


@dataclass_json
@dataclass
class QueryTarget:
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    structured_query: Optional[structuredquery.StructuredQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structuredQuery' }})
    
