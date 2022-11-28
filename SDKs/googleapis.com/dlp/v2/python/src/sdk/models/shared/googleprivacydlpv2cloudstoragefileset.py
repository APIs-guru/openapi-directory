from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CloudStorageFileSet:
    r"""GooglePrivacyDlpV2CloudStorageFileSet
    Message representing a set of files in Cloud Storage.
    """
    
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
