from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRunV2SecretVolumeSource:
    r"""GoogleCloudRunV2SecretVolumeSource
    The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret.
    """
    
    default_mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultMode') }})
    items: Optional[List[GoogleCloudRunV2VersionToPath]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
