from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SecretVolumeSource:
    r"""SecretVolumeSource
    A volume representing a secret stored in Google Secret Manager. The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names.
    """
    
    default_mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultMode') }})
    items: Optional[List[KeyToPath]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optional') }})
    secret_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretName') }})
    
