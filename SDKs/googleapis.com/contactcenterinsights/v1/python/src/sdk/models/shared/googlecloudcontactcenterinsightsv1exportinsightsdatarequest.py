from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum(str, Enum):
    WRITE_DISPOSITION_UNSPECIFIED = "WRITE_DISPOSITION_UNSPECIFIED"
    WRITE_TRUNCATE = "WRITE_TRUNCATE"
    WRITE_APPEND = "WRITE_APPEND"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest:
    r"""GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest
    The request to export insights.
    """
    
    big_query_destination: Optional[GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQueryDestination') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    write_disposition: Optional[GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeDisposition') }})
    
