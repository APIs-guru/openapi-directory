from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SendDebugCaptureRequestDataFormatEnum(str, Enum):
    DATA_FORMAT_UNSPECIFIED = "DATA_FORMAT_UNSPECIFIED"
    RAW = "RAW"
    JSON = "JSON"
    ZLIB = "ZLIB"
    BROTLI = "BROTLI"


@dataclass_json
@dataclass
class SendDebugCaptureRequest:
    r"""SendDebugCaptureRequest
    Request to send encoded debug information. Next ID: 8
    """
    
    component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentId') }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    data_format: Optional[SendDebugCaptureRequestDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFormat') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerId') }})
    
