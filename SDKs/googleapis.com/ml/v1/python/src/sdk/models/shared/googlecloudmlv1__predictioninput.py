from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudMlV1PredictionInputDataFormatEnum(str, Enum):
    DATA_FORMAT_UNSPECIFIED = "DATA_FORMAT_UNSPECIFIED"
    JSON = "JSON"
    TEXT = "TEXT"
    TF_RECORD = "TF_RECORD"
    TF_RECORD_GZIP = "TF_RECORD_GZIP"
    CSV = "CSV"

class GoogleCloudMlV1PredictionInputOutputDataFormatEnum(str, Enum):
    DATA_FORMAT_UNSPECIFIED = "DATA_FORMAT_UNSPECIFIED"
    JSON = "JSON"
    TEXT = "TEXT"
    TF_RECORD = "TF_RECORD"
    TF_RECORD_GZIP = "TF_RECORD_GZIP"
    CSV = "CSV"


@dataclass_json
@dataclass
class GoogleCloudMlV1PredictionInput:
    batch_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchSize' }})
    data_format: Optional[GoogleCloudMlV1PredictionInputDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFormat' }})
    input_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputPaths' }})
    max_worker_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxWorkerCount' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelName' }})
    output_data_format: Optional[GoogleCloudMlV1PredictionInputOutputDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputDataFormat' }})
    output_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputPath' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeVersion' }})
    signature_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureName' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionName' }})
    
