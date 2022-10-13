from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum(str, Enum):
    WRITE_DISPOSITION_UNSPECIFIED = "WRITE_DISPOSITION_UNSPECIFIED"
    WRITE_EMPTY = "WRITE_EMPTY"
    WRITE_TRUNCATE = "WRITE_TRUNCATE"
    WRITE_APPEND = "WRITE_APPEND"


@dataclass_json
@dataclass
class GoogleCloudHealthcareV1beta1DicomBigQueryDestination:
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    table_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableUri' }})
    write_disposition: Optional[GoogleCloudHealthcareV1beta1DicomBigQueryDestinationWriteDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeDisposition' }})
    
