from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum(str, Enum):
    DATA_FORMAT_UNSPECIFIED = "DATA_FORMAT_UNSPECIFIED"
    BLOB = "BLOB"
    JSON = "JSON"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest:
    r"""GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest
    The request message for TestCases.ExportTestCases.
    """
    
    data_format: Optional[GoogleCloudDialogflowCxV3beta1ExportTestCasesRequestDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFormat') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsUri') }})
    
