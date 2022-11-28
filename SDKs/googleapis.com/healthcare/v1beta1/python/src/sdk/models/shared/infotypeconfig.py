from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InfoTypeConfig:
    r"""InfoTypeConfig
    Specifies how to use infoTypes for evaluation. For example, a user might only want to evaluate `PERSON`, `LOCATION`, and `AGE`.
    """
    
    evaluate_list: Optional[FilterList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluateList') }})
    ignore_list: Optional[FilterList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreList') }})
    strict_matching: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strictMatching') }})
    
