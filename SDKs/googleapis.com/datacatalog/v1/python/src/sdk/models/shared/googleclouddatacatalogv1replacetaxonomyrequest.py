from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1serializedtaxonomy


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ReplaceTaxonomyRequest:
    serialized_taxonomy: Optional[googleclouddatacatalogv1serializedtaxonomy.GoogleCloudDatacatalogV1SerializedTaxonomy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serializedTaxonomy' }})
    
