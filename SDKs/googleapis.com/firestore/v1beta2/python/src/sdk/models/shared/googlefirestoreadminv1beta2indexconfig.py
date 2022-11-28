from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta2IndexConfig:
    r"""GoogleFirestoreAdminV1beta2IndexConfig
    The index configuration for this field.
    """
    
    ancestor_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestorField') }})
    indexes: Optional[List[GoogleFirestoreAdminV1beta2Index]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexes') }})
    reverting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverting') }})
    uses_ancestor_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usesAncestorConfig') }})
    
