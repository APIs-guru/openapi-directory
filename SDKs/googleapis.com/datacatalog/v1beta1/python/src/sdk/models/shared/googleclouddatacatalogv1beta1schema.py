from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1columnschema


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1Schema:
    columns: Optional[List[googleclouddatacatalogv1beta1columnschema.GoogleCloudDatacatalogV1beta1ColumnSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    
