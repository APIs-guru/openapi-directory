from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssetV1p4beta1IdentityList:
    group_edges: Optional[List[GoogleCloudAssetV1p4beta1Edge]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupEdges') }})
    identities: Optional[List[GoogleCloudAssetV1p4beta1Identity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identities') }})
    
