from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutionTemplateSpec:
    r"""ExecutionTemplateSpec
    ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
    """
    
    metadata: Optional[ObjectMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[ExecutionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
