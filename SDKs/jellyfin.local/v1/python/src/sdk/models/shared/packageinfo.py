from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PackageInfo:
    r"""PackageInfo
    Class PackageInfo.
    """
    
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guid') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overview') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    versions: Optional[List[VersionInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
