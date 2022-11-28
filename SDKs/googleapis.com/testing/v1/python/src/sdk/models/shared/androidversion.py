from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AndroidVersion:
    r"""AndroidVersion
    A version of the Android OS.
    """
    
    api_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiLevel') }})
    code_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeName') }})
    distribution: Optional[Distribution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    release_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    version_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionString') }})
    
