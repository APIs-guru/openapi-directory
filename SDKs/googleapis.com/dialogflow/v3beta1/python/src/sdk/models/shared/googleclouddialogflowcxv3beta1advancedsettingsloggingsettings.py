from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings:
    r"""GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings
    Define behaviors on logging.
    """
    
    enable_interaction_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableInteractionLogging') }})
    enable_stackdriver_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableStackdriverLogging') }})
    
