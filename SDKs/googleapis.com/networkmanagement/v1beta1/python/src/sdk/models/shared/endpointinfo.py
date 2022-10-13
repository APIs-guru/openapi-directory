from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EndpointInfo:
    destination_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationIp' }})
    destination_network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationNetworkUri' }})
    destination_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationPort' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    source_agent_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAgentUri' }})
    source_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceIp' }})
    source_network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceNetworkUri' }})
    source_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePort' }})
    
