from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1physicalschema


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataplexSpec:
    asset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    compression_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compressionFormat' }})
    data_format: Optional[googleclouddatacatalogv1physicalschema.GoogleCloudDatacatalogV1PhysicalSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFormat' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    
