from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import categorydto
from . import metadatadto
from . import presentationdto


@dataclass_json
@dataclass
class ProductUpdateRequest:
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    category: Optional[categorydto.CategoryDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    external_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalReference' }})
    image_lookup_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageLookupKeys' }})
    metadata: Optional[metadatadto.MetadataDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    presentation: Optional[presentationdto.PresentationDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presentation' }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCode' }})
    tax_exempt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxExempt' }})
    tax_rates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxRates' }})
    unit_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitName' }})
    uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    variant_uuids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variantUuids' }})
    vat_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatPercentage' }})
    
