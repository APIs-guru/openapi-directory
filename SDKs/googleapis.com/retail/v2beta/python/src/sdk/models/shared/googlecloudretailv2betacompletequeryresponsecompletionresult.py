from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult:
    r"""GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult
    Resource that represents completion results.
    """
    
    attributes: Optional[dict[str, GoogleCloudRetailV2betaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestion') }})
    
