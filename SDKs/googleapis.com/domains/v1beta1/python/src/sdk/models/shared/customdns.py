from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomDNS:
    r"""CustomDNS
    Configuration for an arbitrary DNS provider.
    """
    
    ds_records: Optional[List[DsRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dsRecords') }})
    name_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameServers') }})
    
