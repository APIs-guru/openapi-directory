from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudhealthcarev1beta1dicombigquerydestination


@dataclass_json
@dataclass
class GoogleCloudHealthcareV1beta1DicomStreamConfig:
    bigquery_destination: Optional[googlecloudhealthcarev1beta1dicombigquerydestination.GoogleCloudHealthcareV1beta1DicomBigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDestination' }})
    
