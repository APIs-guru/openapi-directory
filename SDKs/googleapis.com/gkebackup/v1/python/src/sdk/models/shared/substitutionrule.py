from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubstitutionRule:
    r"""SubstitutionRule
    A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to substitution) and substitution logic.
    """
    
    new_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newValue') }})
    original_value_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalValuePattern') }})
    target_group_kinds: Optional[List[GroupKind]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroupKinds') }})
    target_json_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetJsonPath') }})
    target_namespaces: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNamespaces') }})
    
