from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1dataplexfilesetspec


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1FilesetSpec:
    dataplex_fileset: Optional[googleclouddatacatalogv1dataplexfilesetspec.GoogleCloudDatacatalogV1DataplexFilesetSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataplexFileset' }})
    
