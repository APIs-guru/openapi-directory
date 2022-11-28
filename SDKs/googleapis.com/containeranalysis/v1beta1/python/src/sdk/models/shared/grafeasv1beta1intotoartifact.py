from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrafeasV1beta1IntotoArtifact:
    hashes: Optional[ArtifactHashes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashes') }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUri') }})
    
