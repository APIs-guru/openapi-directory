from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DiagnosticConfig:
    copy_home_files_flag_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyHomeFilesFlagEnabled' }})
    gcs_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsBucket' }})
    packet_capture_flag_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packetCaptureFlagEnabled' }})
    relative_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativePath' }})
    repair_flag_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repairFlagEnabled' }})
    
