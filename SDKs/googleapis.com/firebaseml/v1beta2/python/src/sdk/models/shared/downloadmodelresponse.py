from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DownloadModelResponseModelFormatEnum(str, Enum):
    MODEL_FORMAT_UNSPECIFIED = "MODEL_FORMAT_UNSPECIFIED"
    TFLITE = "TFLITE"


@dataclass_json
@dataclass
class DownloadModelResponse:
    r"""DownloadModelResponse
    The response for downloading a model to device.
    """
    
    download_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadUri') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    model_format: Optional[DownloadModelResponseModelFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelFormat') }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeBytes') }})
    
