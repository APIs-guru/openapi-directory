from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1columnschemalookercolumnspec
from . import googleclouddatacatalogv1columnschema


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ColumnSchema:
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    looker_column_spec: Optional[googleclouddatacatalogv1columnschemalookercolumnspec.GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookerColumnSpec' }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    subcolumns: Optional[List[googleclouddatacatalogv1columnschema.GoogleCloudDatacatalogV1ColumnSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subcolumns' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
