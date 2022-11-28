from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddressInput:
    r"""AddressInput
    A person's physical address. May be a P.O. box or street address. All fields are optional.
    """
    
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    extended_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedAddress') }})
    formatted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedValue') }})
    metadata: Optional[FieldMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    po_box: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poBox') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetAddress') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class Address:
    r"""Address
    A person's physical address. May be a P.O. box or street address. All fields are optional.
    """
    
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    extended_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedAddress') }})
    formatted_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedType') }})
    formatted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedValue') }})
    metadata: Optional[FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    po_box: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poBox') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetAddress') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
