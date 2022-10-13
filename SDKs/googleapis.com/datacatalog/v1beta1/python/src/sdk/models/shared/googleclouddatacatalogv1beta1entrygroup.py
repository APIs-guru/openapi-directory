from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1systemtimestamps


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1EntryGroup:
    data_catalog_timestamps: Optional[googleclouddatacatalogv1beta1systemtimestamps.GoogleCloudDatacatalogV1beta1SystemTimestamps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataCatalogTimestamps' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
