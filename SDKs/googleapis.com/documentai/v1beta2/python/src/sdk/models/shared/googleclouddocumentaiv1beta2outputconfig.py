from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2gcsdestination


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2OutputConfig:
    gcs_destination: Optional[googleclouddocumentaiv1beta2gcsdestination.GoogleCloudDocumentaiV1beta2GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    pages_per_shard: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagesPerShard' }})
    
