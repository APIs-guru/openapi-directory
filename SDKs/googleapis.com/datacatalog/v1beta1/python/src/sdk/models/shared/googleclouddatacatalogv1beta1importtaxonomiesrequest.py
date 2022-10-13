from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1inlinesource


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest:
    inline_source: Optional[googleclouddatacatalogv1beta1inlinesource.GoogleCloudDatacatalogV1beta1InlineSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineSource' }})
    
