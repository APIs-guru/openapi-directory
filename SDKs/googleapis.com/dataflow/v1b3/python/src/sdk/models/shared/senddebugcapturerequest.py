from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SendDebugCaptureRequestDataFormatEnum(str, Enum):
    DATA_FORMAT_UNSPECIFIED = "DATA_FORMAT_UNSPECIFIED"
    RAW = "RAW"
    JSON = "JSON"
    ZLIB = "ZLIB"
    BROTLI = "BROTLI"


@dataclass_json
@dataclass
class SendDebugCaptureRequest:
    component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentId' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    data_format: Optional[SendDebugCaptureRequestDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFormat' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerId' }})
    
