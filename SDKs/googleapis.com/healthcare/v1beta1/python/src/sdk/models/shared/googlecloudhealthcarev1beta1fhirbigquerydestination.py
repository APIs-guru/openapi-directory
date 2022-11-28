from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum(str, Enum):
    WRITE_DISPOSITION_UNSPECIFIED = "WRITE_DISPOSITION_UNSPECIFIED"
    WRITE_EMPTY = "WRITE_EMPTY"
    WRITE_TRUNCATE = "WRITE_TRUNCATE"
    WRITE_APPEND = "WRITE_APPEND"


@dataclass_json
@dataclass
class GoogleCloudHealthcareV1beta1FhirBigQueryDestination:
    r"""GoogleCloudHealthcareV1beta1FhirBigQueryDestination
    The configuration for exporting to BigQuery.
    """
    
    dataset_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetUri') }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    schema_config: Optional[SchemaConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaConfig') }})
    write_disposition: Optional[GoogleCloudHealthcareV1beta1FhirBigQueryDestinationWriteDispositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeDisposition') }})
    
