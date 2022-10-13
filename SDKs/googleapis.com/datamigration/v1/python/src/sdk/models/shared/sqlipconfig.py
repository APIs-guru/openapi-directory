from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sqlaclentry


@dataclass_json
@dataclass
class SQLIPConfig:
    authorized_networks: Optional[List[sqlaclentry.SQLACLEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedNetworks' }})
    enable_ipv4: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableIpv4' }})
    private_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateNetwork' }})
    require_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requireSsl' }})
    
