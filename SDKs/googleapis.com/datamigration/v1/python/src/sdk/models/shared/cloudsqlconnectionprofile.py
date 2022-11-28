from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudSQLConnectionProfileInput:
    r"""CloudSQLConnectionProfileInput
    Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
    """
    
    settings: Optional[CloudSQLSettingsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclass
class CloudSQLConnectionProfile:
    r"""CloudSQLConnectionProfile
    Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
    """
    
    additional_public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalPublicIp') }})
    cloud_sql_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlId') }})
    private_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateIp') }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIp') }})
    settings: Optional[CloudSQLSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
