from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocalizedStringBundle:
    r"""LocalizedStringBundle
    A localized string bundle resource.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    translations: Optional[List[LocalizedString]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    
