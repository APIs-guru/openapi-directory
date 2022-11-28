from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1LoggingConfig:
    r"""GoogleCloudDialogflowV2beta1LoggingConfig
    Defines logging behavior for conversation lifecycle events.
    """
    
    enable_stackdriver_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableStackdriverLogging') }})
    
