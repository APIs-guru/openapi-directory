from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttachedResource:
    r"""AttachedResource
    Attached resource representation, which is defined by the corresponding service provider. It represents an attached resource's payload.
    """
    
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetType') }})
    versioned_resources: Optional[List[VersionedResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionedResources') }})
    
