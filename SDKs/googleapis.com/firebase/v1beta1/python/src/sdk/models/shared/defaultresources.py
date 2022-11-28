from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DefaultResources:
    r"""DefaultResources
    The default resources associated with the Project.
    """
    
    hosting_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostingSite') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    realtime_database_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realtimeDatabaseInstance') }})
    storage_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageBucket') }})
    
