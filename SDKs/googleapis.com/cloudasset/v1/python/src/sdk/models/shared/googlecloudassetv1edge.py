from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudAssetV1Edge:
    r"""GoogleCloudAssetV1Edge
    A directional edge.
    """
    
    source_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceNode') }})
    target_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNode') }})
    
