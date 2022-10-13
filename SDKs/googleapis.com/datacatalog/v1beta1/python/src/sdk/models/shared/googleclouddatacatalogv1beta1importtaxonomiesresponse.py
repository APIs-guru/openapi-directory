from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1taxonomy


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse:
    taxonomies: Optional[List[googleclouddatacatalogv1beta1taxonomy.GoogleCloudDatacatalogV1beta1Taxonomy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomies' }})
    
