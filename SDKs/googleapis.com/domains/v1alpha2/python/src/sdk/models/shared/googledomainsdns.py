from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dsrecord

class GoogleDomainsDNSDsStateEnum(str, Enum):
    DS_STATE_UNSPECIFIED = "DS_STATE_UNSPECIFIED"
    DS_RECORDS_UNPUBLISHED = "DS_RECORDS_UNPUBLISHED"
    DS_RECORDS_PUBLISHED = "DS_RECORDS_PUBLISHED"


@dataclass_json
@dataclass
class GoogleDomainsDNS:
    ds_records: Optional[List[dsrecord.DsRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dsRecords' }})
    ds_state: Optional[GoogleDomainsDNSDsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dsState' }})
    name_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameServers' }})
    
