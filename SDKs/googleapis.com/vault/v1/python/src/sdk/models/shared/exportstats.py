from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExportStats:
    r"""ExportStats
    Progress information for an export.
    """
    
    exported_artifact_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportedArtifactCount') }})
    size_in_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInBytes') }})
    total_artifact_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalArtifactCount') }})
    
