from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ExcludeByHotword:
    r"""GooglePrivacyDlpV2ExcludeByHotword
    The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if a BigQuery column matches a specific pattern.
    """
    
    hotword_regex: Optional[GooglePrivacyDlpV2Regex] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotwordRegex') }})
    proximity: Optional[GooglePrivacyDlpV2Proximity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proximity') }})
    
