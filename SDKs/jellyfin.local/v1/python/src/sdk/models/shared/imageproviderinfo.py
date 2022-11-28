from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageProviderInfo:
    r"""ImageProviderInfo
    Class ImageProviderInfo.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    supported_images: Optional[List[ImageTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedImages') }})
    
