from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1taxonomy


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ImportTaxonomiesResponse:
    taxonomies: Optional[List[googleclouddatacatalogv1taxonomy.GoogleCloudDatacatalogV1Taxonomy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomies' }})
    
