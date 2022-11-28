from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TargetArtifact:
    r"""TargetArtifact
    The artifacts produced by a target render operation.
    """
    
    artifact_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactUri') }})
    manifest_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifestPath') }})
    skaffold_config_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skaffoldConfigPath') }})
    
