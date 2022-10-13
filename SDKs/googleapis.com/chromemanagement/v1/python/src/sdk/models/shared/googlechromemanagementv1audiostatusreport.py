from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromeManagementV1AudioStatusReport:
    input_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDevice' }})
    input_gain: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputGain' }})
    input_mute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputMute' }})
    output_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputDevice' }})
    output_mute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputMute' }})
    output_volume: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputVolume' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    
