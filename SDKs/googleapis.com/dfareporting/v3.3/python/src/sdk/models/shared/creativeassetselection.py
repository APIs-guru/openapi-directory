from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreativeAssetSelection:
    r"""CreativeAssetSelection
    Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.
    """
    
    default_asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAssetId') }})
    rules: Optional[List[Rule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
