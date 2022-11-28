from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Apk:
    r"""Apk
    An Android package file to install.
    """
    
    location: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    
