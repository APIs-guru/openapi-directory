from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GenerateExclusivityManifestResponse:
    r"""GenerateExclusivityManifestResponse
    The response of the exclusivity artifacts manifests for the client to apply.
    """
    
    cr_manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crManifest') }})
    crd_manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crdManifest') }})
    
