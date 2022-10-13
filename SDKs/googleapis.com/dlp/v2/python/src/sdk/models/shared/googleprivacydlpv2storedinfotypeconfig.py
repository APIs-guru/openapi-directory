from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2dictionary
from . import googleprivacydlpv2largecustomdictionaryconfig
from . import googleprivacydlpv2regex


@dataclass_json
@dataclass
class GooglePrivacyDlpV2StoredInfoTypeConfig:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dictionary: Optional[googleprivacydlpv2dictionary.GooglePrivacyDlpV2Dictionary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dictionary' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    large_custom_dictionary: Optional[googleprivacydlpv2largecustomdictionaryconfig.GooglePrivacyDlpV2LargeCustomDictionaryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largeCustomDictionary' }})
    regex: Optional[googleprivacydlpv2regex.GooglePrivacyDlpV2Regex] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    
