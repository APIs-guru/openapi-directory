from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamConfig:
    r"""StreamConfig
    Contains configuration for streaming FHIR export.
    """
    
    bigquery_destination: Optional[GoogleCloudHealthcareV1beta1FhirBigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDestination') }})
    deidentified_store_destination: Optional[DeidentifiedStoreDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifiedStoreDestination') }})
    resource_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceTypes') }})
    
