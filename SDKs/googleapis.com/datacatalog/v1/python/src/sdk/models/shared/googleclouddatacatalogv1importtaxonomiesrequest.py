from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1crossregionalsource
from . import googleclouddatacatalogv1inlinesource


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ImportTaxonomiesRequest:
    cross_regional_source: Optional[googleclouddatacatalogv1crossregionalsource.GoogleCloudDatacatalogV1CrossRegionalSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crossRegionalSource' }})
    inline_source: Optional[googleclouddatacatalogv1inlinesource.GoogleCloudDatacatalogV1InlineSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineSource' }})
    
