from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Datafeed:
    r"""Datafeed
    Datafeed configuration data.
    """
    
    attribute_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeLanguage') }})
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLanguage') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    fetch_schedule: Optional[DatafeedFetchSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetchSchedule') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    format: Optional[DatafeedFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    intended_destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedDestinations') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    target_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCountry') }})
    targets: Optional[List[DatafeedTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    
