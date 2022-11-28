from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Subject:
    r"""Subject
    Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.
    """
    
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locality') }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    organizational_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationalUnit') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('province') }})
    street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetAddress') }})
    
