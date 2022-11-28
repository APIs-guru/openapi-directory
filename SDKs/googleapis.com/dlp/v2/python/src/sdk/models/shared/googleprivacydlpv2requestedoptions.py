from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RequestedOptions:
    r"""GooglePrivacyDlpV2RequestedOptions
    Snapshot of the inspection configuration.
    """
    
    job_config: Optional[GooglePrivacyDlpV2InspectJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobConfig') }})
    snapshot_inspect_template: Optional[GooglePrivacyDlpV2InspectTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotInspectTemplate') }})
    
