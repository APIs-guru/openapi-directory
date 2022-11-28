from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegionResolvers:
    ipv4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    
class RegionStatusEnum(str, Enum):
    OK = "ok"
    OUTAGE = "outage"


@dataclass_json
@dataclass
class Region:
    r"""Region
    An area where Linode services are available.
    """
    
    capabilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    resolvers: Optional[RegionResolvers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvers') }})
    status: Optional[RegionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
