from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductResponse:
    created: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    etag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    variants: List[VariantDto] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('variants') }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    category: Optional[CategoryDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    external_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalReference') }})
    image_lookup_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageLookupKeys') }})
    metadata: Optional[MetadataDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    online: Optional[OnlineProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('online') }})
    presentation: Optional[PresentationDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentation') }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCode') }})
    tax_exempt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxExempt') }})
    tax_rates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxRates') }})
    unit_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitName') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    variant_option_definitions: Optional[VariantOptionDefinitions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantOptionDefinitions') }})
    vat_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatPercentage') }})
    
