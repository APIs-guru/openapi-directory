from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import categorydto
from . import metadatadto
from . import onlineproperties
from . import presentationdto
from . import variantoptiondefinitions
from . import variantdto


@dataclass_json
@dataclass
class ProductResponse:
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    category: Optional[categorydto.CategoryDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    created: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    external_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalReference' }})
    image_lookup_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageLookupKeys' }})
    metadata: Optional[metadatadto.MetadataDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    online: Optional[onlineproperties.OnlineProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'online' }})
    presentation: Optional[presentationdto.PresentationDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presentation' }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCode' }})
    tax_exempt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxExempt' }})
    tax_rates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxRates' }})
    unit_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitName' }})
    updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    variant_option_definitions: Optional[variantoptiondefinitions.VariantOptionDefinitions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variantOptionDefinitions' }})
    variants: List[variantdto.VariantDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variants' }})
    vat_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatPercentage' }})
    
