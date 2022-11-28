from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""GoogleCloudMlV1PredictionInput
    Represents input parameters for a prediction job.
    """
    
    batch_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchSize') }})
    data_format: Optional[GoogleCloudMlV1PredictionInputDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFormat') }})
    input_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputPaths') }})
    max_worker_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxWorkerCount') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelName') }})
    output_data_format: Optional[GoogleCloudMlV1PredictionInputOutputDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputDataFormat') }})
    output_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputPath') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeVersion') }})
    signature_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureName') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionName') }})
    
