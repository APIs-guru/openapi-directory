from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1gcsdestination


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1OutputConfig:
    batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchSize' }})
    gcs_destination: Optional[googlecloudvisionv1p2beta1gcsdestination.GoogleCloudVisionV1p2beta1GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    
