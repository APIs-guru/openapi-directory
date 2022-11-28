from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinodeStatsIo:
    r"""LinodeStatsIo
    Input/Output statistics.
    """
    
    io: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('io') }})
    swap: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('swap') }})
    

@dataclass_json
@dataclass
class LinodeStatsNetv4:
    r"""LinodeStatsNetv4
    IPv4 statistics.
    """
    
    in_: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    out: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('out') }})
    private_in: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_in') }})
    private_out: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_out') }})
    

@dataclass_json
@dataclass
class LinodeStatsNetv6:
    r"""LinodeStatsNetv6
    IPv6 statistics.
    """
    
    in_: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    out: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('out') }})
    private_in: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_in') }})
    private_out: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_out') }})
    

@dataclass_json
@dataclass
class LinodeStats:
    r"""LinodeStats
    CPU, IO, IPv4, and IPv6 statistics. Graph data, if available, is in \"[timestamp, reading]\" array format. Timestamp is a UNIX timestamp in EST.
    
    """
    
    cpu: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    io: Optional[LinodeStatsIo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('io') }})
    netv4: Optional[LinodeStatsNetv4] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netv4') }})
    netv6: Optional[LinodeStatsNetv6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netv6') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
