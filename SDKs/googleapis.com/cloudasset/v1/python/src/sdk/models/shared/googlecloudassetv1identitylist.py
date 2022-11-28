from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssetV1IdentityList:
    r"""GoogleCloudAssetV1IdentityList
    The identities and group edges.
    """
    
    group_edges: Optional[List[GoogleCloudAssetV1Edge]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupEdges') }})
    identities: Optional[List[GoogleCloudAssetV1Identity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identities') }})
    
