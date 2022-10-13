from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1gcsfilespec


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1GcsFilesetSpec:
    file_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePatterns' }})
    sample_gcs_file_specs: Optional[List[googleclouddatacatalogv1beta1gcsfilespec.GoogleCloudDatacatalogV1beta1GcsFileSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleGcsFileSpecs' }})
    
