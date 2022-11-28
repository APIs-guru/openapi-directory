from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePrivacyDlpV2WordList:
    r"""GooglePrivacyDlpV2WordList
    Message defining a list of words or phrases to search for in the data.
    """
    
    words: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('words') }})
    
