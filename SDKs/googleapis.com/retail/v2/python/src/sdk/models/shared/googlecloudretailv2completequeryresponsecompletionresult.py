from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2CompleteQueryResponseCompletionResult:
    r"""GoogleCloudRetailV2CompleteQueryResponseCompletionResult
    Resource that represents completion results.
    """
    
    attributes: Optional[dict[str, GoogleCloudRetailV2CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestion') }})
    
