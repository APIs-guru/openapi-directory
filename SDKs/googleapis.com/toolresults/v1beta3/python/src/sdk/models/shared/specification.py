from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Specification:
    r"""Specification
    The details about how to run the execution.
    """
    
    android_test: Optional[AndroidTest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidTest') }})
    ios_test: Optional[IosTest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosTest') }})
    
