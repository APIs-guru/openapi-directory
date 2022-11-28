from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupKind:
    r"""GroupKind
    This is a direct map to the Kubernetes GroupKind type [GroupKind](https://godoc.org/k8s.io/apimachinery/pkg/runtime/schema#GroupKind) and is used for identifying specific \"types\" of resources to restore.
    """
    
    resource_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroup') }})
    resource_kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceKind') }})
    
