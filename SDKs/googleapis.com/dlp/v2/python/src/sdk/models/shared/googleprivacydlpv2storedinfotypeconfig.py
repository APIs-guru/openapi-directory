from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2StoredInfoTypeConfig:
    r"""GooglePrivacyDlpV2StoredInfoTypeConfig
    Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dictionary: Optional[GooglePrivacyDlpV2Dictionary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dictionary') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    large_custom_dictionary: Optional[GooglePrivacyDlpV2LargeCustomDictionaryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largeCustomDictionary') }})
    regex: Optional[GooglePrivacyDlpV2Regex] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    
