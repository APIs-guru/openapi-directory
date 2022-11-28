from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OptionsPrimaryIdsEnum(str, Enum):
    PRIMARY_IDS_OPTION_UNSPECIFIED = "PRIMARY_IDS_OPTION_UNSPECIFIED"
    KEEP = "KEEP"
    REGEN = "REGEN"


@dataclass_json
@dataclass
class Options:
    r"""Options
    Specifies additional options to apply to the base profile.
    """
    
    clean_descriptors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleanDescriptors') }})
    clean_image: Optional[ImageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleanImage') }})
    primary_ids: Optional[OptionsPrimaryIdsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryIds') }})
    
