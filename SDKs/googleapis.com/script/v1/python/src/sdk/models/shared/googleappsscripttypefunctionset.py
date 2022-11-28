from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsScriptTypeFunctionSet:
    r"""GoogleAppsScriptTypeFunctionSet
    A set of functions. No duplicates are permitted.
    """
    
    values: Optional[List[GoogleAppsScriptTypeFunction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
