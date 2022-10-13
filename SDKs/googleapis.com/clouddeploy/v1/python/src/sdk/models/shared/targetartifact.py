from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TargetArtifact:
    artifact_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactUri' }})
    manifest_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manifestPath' }})
    skaffold_config_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skaffoldConfigPath' }})
    
