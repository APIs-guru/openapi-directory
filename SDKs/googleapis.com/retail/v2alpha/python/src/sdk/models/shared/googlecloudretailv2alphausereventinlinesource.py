from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaUserEventInlineSourceInput:
    r"""GoogleCloudRetailV2alphaUserEventInlineSourceInput
    The inline source for the input config for ImportUserEvents method.
    """
    
    user_events: Optional[List[GoogleCloudRetailV2alphaUserEventInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEvents') }})
    
