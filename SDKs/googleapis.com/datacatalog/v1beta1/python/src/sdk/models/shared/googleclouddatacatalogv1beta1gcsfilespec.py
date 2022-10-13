from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1systemtimestamps


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1GcsFileSpec:
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    gcs_timestamps: Optional[googleclouddatacatalogv1beta1systemtimestamps.GoogleCloudDatacatalogV1beta1SystemTimestamps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsTimestamps' }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeBytes' }})
    
