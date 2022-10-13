from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ipconfig


@dataclass_json
@dataclass
class GclbTarget:
    ip_configs: Optional[List[ipconfig.IPConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipConfigs' }})
    target_https_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetHttpsProxy' }})
    target_ssl_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetSslProxy' }})
    
