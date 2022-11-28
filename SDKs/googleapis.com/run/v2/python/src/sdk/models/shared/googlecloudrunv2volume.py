from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRunV2Volume:
    r"""GoogleCloudRunV2Volume
    Volume represents a named volume in a container.
    """
    
    cloud_sql_instance: Optional[GoogleCloudRunV2CloudSQLInstance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlInstance') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    secret: Optional[GoogleCloudRunV2SecretVolumeSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
