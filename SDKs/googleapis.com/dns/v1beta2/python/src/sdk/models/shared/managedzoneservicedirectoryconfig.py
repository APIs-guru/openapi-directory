from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import managedzoneservicedirectoryconfignamespace


@dataclass_json
@dataclass
class ManagedZoneServiceDirectoryConfig:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    namespace: Optional[managedzoneservicedirectoryconfignamespace.ManagedZoneServiceDirectoryConfigNamespace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespace' }})
    
