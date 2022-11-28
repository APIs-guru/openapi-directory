from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2AutoMlParams:
    r"""GoogleCloudDocumentaiV1beta2AutoMlParams
    Parameters to control AutoML model prediction behavior.
    """
    
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
