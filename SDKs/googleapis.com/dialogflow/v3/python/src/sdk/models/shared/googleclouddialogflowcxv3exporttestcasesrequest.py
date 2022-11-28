from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum(str, Enum):
    DATA_FORMAT_UNSPECIFIED = "DATA_FORMAT_UNSPECIFIED"
    BLOB = "BLOB"
    JSON = "JSON"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ExportTestCasesRequest:
    r"""GoogleCloudDialogflowCxV3ExportTestCasesRequest
    The request message for TestCases.ExportTestCases.
    """
    
    data_format: Optional[GoogleCloudDialogflowCxV3ExportTestCasesRequestDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFormat') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsUri') }})
    
