from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudHealthcareV1beta1DicomStreamConfig:
    r"""GoogleCloudHealthcareV1beta1DicomStreamConfig
    StreamConfig specifies configuration for a streaming DICOM export.
    """
    
    bigquery_destination: Optional[GoogleCloudHealthcareV1beta1DicomBigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDestination') }})
    
