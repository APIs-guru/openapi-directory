from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import artifacthashes


@dataclass_json
@dataclass
class GrafeasV1beta1IntotoArtifact:
    hashes: Optional[artifacthashes.ArtifactHashes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashes' }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUri' }})
    
