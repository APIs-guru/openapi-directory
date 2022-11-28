from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NiResponseJSONBasic:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    country_code_iso3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code_iso3') }})
    country_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_name') }})
    country_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_prefix') }})
    international_format_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('international_format_number') }})
    national_format_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('national_format_number') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_message') }})
    
