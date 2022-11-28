from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1PersonalDetails:
    r"""GoogleCloudDatacatalogV1PersonalDetails
    Entry metadata relevant only to the user and private to them.
    """
    
    star_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starTime') }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred') }})
    
