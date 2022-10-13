from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1serializedtaxonomy


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ExportTaxonomiesResponse:
    taxonomies: Optional[List[googleclouddatacatalogv1serializedtaxonomy.GoogleCloudDatacatalogV1SerializedTaxonomy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomies' }})
    
