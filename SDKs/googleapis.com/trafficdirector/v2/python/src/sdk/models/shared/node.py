from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import extension
from . import address
from . import locality
from . import buildversion


@dataclass_json
@dataclass
class Node:
    build_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildVersion' }})
    client_features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientFeatures' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    extensions: Optional[List[extension.Extension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extensions' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    listening_addresses: Optional[List[address.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listeningAddresses' }})
    locality: Optional[locality.Locality] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locality' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    user_agent_build_version: Optional[buildversion.BuildVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgentBuildVersion' }})
    user_agent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgentName' }})
    user_agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgentVersion' }})
    
