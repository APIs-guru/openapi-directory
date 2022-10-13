from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectagentresource


@dataclass_json
@dataclass
class GenerateConnectManifestResponse:
    manifest: Optional[List[connectagentresource.ConnectAgentResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manifest' }})
    
