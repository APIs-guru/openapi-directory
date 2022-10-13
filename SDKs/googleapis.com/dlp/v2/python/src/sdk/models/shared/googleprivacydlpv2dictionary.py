from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2cloudstoragepath
from . import googleprivacydlpv2wordlist


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Dictionary:
    cloud_storage_path: Optional[googleprivacydlpv2cloudstoragepath.GooglePrivacyDlpV2CloudStoragePath] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudStoragePath' }})
    word_list: Optional[googleprivacydlpv2wordlist.GooglePrivacyDlpV2WordList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wordList' }})
    
