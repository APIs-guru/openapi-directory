from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InspectURLIndexRequest:
    r"""InspectURLIndexRequest
    Index inspection request.
    """
    
    inspection_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectionUrl') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    site_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteUrl') }})
    
