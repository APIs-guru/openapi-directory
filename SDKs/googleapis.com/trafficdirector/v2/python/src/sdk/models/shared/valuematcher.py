from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import doublematcher
from . import listmatcher
from . import stringmatcher


@dataclass_json
@dataclass
class ValueMatcher:
    bool_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boolMatch' }})
    double_match: Optional[doublematcher.DoubleMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleMatch' }})
    list_match: Optional[listmatcher.ListMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listMatch' }})
    null_match: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nullMatch' }})
    present_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presentMatch' }})
    string_match: Optional[stringmatcher.StringMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringMatch' }})
    
