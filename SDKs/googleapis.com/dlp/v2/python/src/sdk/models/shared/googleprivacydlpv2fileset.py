from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2FileSet:
    r"""GooglePrivacyDlpV2FileSet
    Set of files to scan.
    """
    
    regex_file_set: Optional[GooglePrivacyDlpV2CloudStorageRegexFileSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexFileSet') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
