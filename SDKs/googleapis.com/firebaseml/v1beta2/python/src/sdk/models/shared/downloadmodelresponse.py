from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DownloadModelResponseModelFormatEnum(str, Enum):
    MODEL_FORMAT_UNSPECIFIED = "MODEL_FORMAT_UNSPECIFIED"
    TFLITE = "TFLITE"


@dataclass_json
@dataclass
class DownloadModelResponse:
    download_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadUri' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    model_format: Optional[DownloadModelResponseModelFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelFormat' }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeBytes' }})
    
