from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Node:
    r"""Node
    Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 12]
    """
    
    build_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildVersion') }})
    client_features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientFeatures') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    extensions: Optional[List[Extension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extensions') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    listening_addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listeningAddresses') }})
    locality: Optional[Locality] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locality') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    user_agent_build_version: Optional[BuildVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgentBuildVersion') }})
    user_agent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgentName') }})
    user_agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgentVersion') }})
    
