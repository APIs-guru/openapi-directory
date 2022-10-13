from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphaproduct


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchResponseSearchResult:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    matching_variant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchingVariantCount' }})
    matching_variant_fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchingVariantFields' }})
    personal_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalLabels' }})
    product: Optional[googlecloudretailv2alphaproduct.GoogleCloudRetailV2alphaProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    variant_rollup_values: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variantRollupValues' }})
    
