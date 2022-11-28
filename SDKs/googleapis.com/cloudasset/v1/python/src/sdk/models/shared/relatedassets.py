from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RelatedAssets:
    r"""RelatedAssets
    DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The detailed related assets with the `relationship_type`.
    """
    
    assets: Optional[List[RelatedAsset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    relationship_attributes: Optional[RelationshipAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipAttributes') }})
    
