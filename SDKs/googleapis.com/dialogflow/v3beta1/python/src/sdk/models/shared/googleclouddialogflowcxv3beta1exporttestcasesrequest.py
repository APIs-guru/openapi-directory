from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum(str, Enum):
    DATA_FORMAT_UNSPECIFIED = "DATA_FORMAT_UNSPECIFIED"
    BLOB = "BLOB"
    JSON = "JSON"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest:
    data_format: Optional[GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFormat' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsUri' }})
    
