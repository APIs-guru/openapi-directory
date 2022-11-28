from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrganizationList:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    province_state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('province_state') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    fax_tel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax_tel') }})
    main_tel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('main_tel') }})
    org_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_guid') }})
    org_verbose_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_verbose_name') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_address') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website_url') }})
    
