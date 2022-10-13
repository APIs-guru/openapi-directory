from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudhealthcarev1beta1consentgcsdestination


@dataclass_json
@dataclass
class QueryAccessibleDataRequest:
    gcs_destination: Optional[googlecloudhealthcarev1beta1consentgcsdestination.GoogleCloudHealthcareV1beta1ConsentGcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    request_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestAttributes' }})
    resource_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceAttributes' }})
    
