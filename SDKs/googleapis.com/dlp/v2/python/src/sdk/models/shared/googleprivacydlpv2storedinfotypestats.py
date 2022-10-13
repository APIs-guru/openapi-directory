from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2largecustomdictionarystats


@dataclass_json
@dataclass
class GooglePrivacyDlpV2StoredInfoTypeStats:
    large_custom_dictionary: Optional[googleprivacydlpv2largecustomdictionarystats.GooglePrivacyDlpV2LargeCustomDictionaryStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largeCustomDictionary' }})
    
