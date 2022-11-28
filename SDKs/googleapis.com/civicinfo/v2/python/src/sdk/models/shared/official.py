from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Official:
    r"""Official
    Information about a person holding an elected office.
    """
    
    address: Optional[List[SimpleAddressType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    channels: Optional[List[Channel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    geocoding_summaries: Optional[List[GeocodingSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geocodingSummaries') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    phones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phones') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoUrl') }})
    urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    
