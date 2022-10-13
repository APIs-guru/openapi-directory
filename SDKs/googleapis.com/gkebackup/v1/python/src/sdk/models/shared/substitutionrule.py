from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupkind


@dataclass_json
@dataclass
class SubstitutionRule:
    new_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newValue' }})
    original_value_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalValuePattern' }})
    target_group_kinds: Optional[List[groupkind.GroupKind]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetGroupKinds' }})
    target_json_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetJsonPath' }})
    target_namespaces: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNamespaces' }})
    
