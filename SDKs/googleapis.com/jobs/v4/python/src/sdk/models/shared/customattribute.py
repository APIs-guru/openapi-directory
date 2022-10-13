from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomAttribute:
    filterable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterable' }})
    keyword_searchable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywordSearchable' }})
    long_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longValues' }})
    string_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValues' }})
    
