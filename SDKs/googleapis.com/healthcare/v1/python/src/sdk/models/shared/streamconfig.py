from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudhealthcarev1fhirbigquerydestination
from . import deidentifiedstoredestination


@dataclass_json
@dataclass
class StreamConfig:
    bigquery_destination: Optional[googlecloudhealthcarev1fhirbigquerydestination.GoogleCloudHealthcareV1FhirBigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDestination' }})
    deidentified_store_destination: Optional[deidentifiedstoredestination.DeidentifiedStoreDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deidentifiedStoreDestination' }})
    resource_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceTypes' }})
    
