from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ForwardingRuleInfo:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    matched_port_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchedPortRange' }})
    matched_protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchedProtocol' }})
    network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkUri' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    vip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vip' }})
    
