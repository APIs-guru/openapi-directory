from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FirstLastNamePhoneCodedOut:
    r"""FirstLastNamePhoneCodedOut
    Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.
    """
    
    country_iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryIso2') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    international_phone_number_verified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internationalPhoneNumberVerified') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    origin_country_iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originCountryIso2') }})
    origin_country_iso2_alt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originCountryIso2Alt') }})
    phone_country_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneCountryCode') }})
    phone_country_code_alt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneCountryCodeAlt') }})
    phone_country_iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneCountryIso2') }})
    phone_country_iso2_alt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneCountryIso2Alt') }})
    phone_country_iso2_verified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneCountryIso2Verified') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    
