from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LinodeStatsIo:
    io: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'io' }})
    swap: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'swap' }})
    

@dataclass_json
@dataclass
class LinodeStatsNetv4:
    in_: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in' }})
    out: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'out' }})
    private_in: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_in' }})
    private_out: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_out' }})
    

@dataclass_json
@dataclass
class LinodeStatsNetv6:
    in_: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in' }})
    out: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'out' }})
    private_in: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_in' }})
    private_out: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_out' }})
    

@dataclass_json
@dataclass
class LinodeStats:
    cpu: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    io: Optional[LinodeStatsIo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'io' }})
    netv4: Optional[LinodeStatsNetv4] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netv4' }})
    netv6: Optional[LinodeStatsNetv6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netv6' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
