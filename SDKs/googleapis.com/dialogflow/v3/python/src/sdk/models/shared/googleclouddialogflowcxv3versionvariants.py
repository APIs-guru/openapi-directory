from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3VersionVariants:
    r"""GoogleCloudDialogflowCxV3VersionVariants
    A list of flow version variants.
    """
    
    variants: Optional[List[GoogleCloudDialogflowCxV3VersionVariantsVariant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variants') }})
    
