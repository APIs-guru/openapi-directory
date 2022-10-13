from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dsrecord


@dataclass_json
@dataclass
class CustomDNS:
    ds_records: Optional[List[dsrecord.DsRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dsRecords' }})
    name_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameServers' }})
    
