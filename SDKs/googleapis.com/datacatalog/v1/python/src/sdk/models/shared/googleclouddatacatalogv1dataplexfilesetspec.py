from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1dataplexspec


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataplexFilesetSpec:
    dataplex_spec: Optional[googleclouddatacatalogv1dataplexspec.GoogleCloudDatacatalogV1DataplexSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataplexSpec' }})
    
