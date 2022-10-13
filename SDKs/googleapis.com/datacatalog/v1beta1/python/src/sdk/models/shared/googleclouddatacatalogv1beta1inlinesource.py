from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1serializedtaxonomy


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1InlineSource:
    taxonomies: Optional[List[googleclouddatacatalogv1beta1serializedtaxonomy.GoogleCloudDatacatalogV1beta1SerializedTaxonomy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomies' }})
    
