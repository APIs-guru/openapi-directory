from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1dataplexspec
from . import googleclouddatacatalogv1dataplexexternaltable


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataplexTableSpec:
    dataplex_spec: Optional[googleclouddatacatalogv1dataplexspec.GoogleCloudDatacatalogV1DataplexSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataplexSpec' }})
    external_tables: Optional[List[googleclouddatacatalogv1dataplexexternaltable.GoogleCloudDatacatalogV1DataplexExternalTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalTables' }})
    user_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userManaged' }})
    
