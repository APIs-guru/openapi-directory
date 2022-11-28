from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum(str, Enum):
    WRITE_DISPOSITION_UNSPECIFIED = "WRITE_DISPOSITION_UNSPECIFIED"
    WRITE_EMPTY = "WRITE_EMPTY"
    WRITE_TRUNCATE = "WRITE_TRUNCATE"
    WRITE_APPEND = "WRITE_APPEND"


@dataclass_json
@dataclass
class GoogleCloudHealthcareV1beta1DicomBigQueryDestination:
    r"""GoogleCloudHealthcareV1beta1DicomBigQueryDestination
    The BigQuery table where the server writes output.
    """
    
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    table_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableUri') }})
    write_disposition: Optional[GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeDisposition') }})
    
