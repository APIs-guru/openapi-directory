from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RevisionTemplate:
    r"""RevisionTemplate
    RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
    """
    
    metadata: Optional[ObjectMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[RevisionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
