from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3AdvancedSettings:
    r"""GoogleCloudDialogflowCxV3AdvancedSettings
    Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
    """
    
    logging_settings: Optional[GoogleCloudDialogflowCxV3AdvancedSettingsLoggingSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingSettings') }})
    
