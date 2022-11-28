from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileOccurrence:
    r"""FileOccurrence
    FileOccurrence represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/
    """
    
    attributions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributions') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    contributors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributors') }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    files_license_info: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesLicenseInfo') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    license_concluded: Optional[License] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseConcluded') }})
    notice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notice') }})
    
