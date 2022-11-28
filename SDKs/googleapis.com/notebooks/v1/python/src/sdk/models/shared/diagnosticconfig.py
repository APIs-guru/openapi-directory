from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DiagnosticConfig:
    r"""DiagnosticConfig
    Defines flags that are used to run the diagnostic tool
    """
    
    copy_home_files_flag_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyHomeFilesFlagEnabled') }})
    gcs_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsBucket') }})
    packet_capture_flag_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packetCaptureFlagEnabled') }})
    relative_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativePath') }})
    repair_flag_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repairFlagEnabled') }})
    
