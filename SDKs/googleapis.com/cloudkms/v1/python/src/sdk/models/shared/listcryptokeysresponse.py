from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cryptokey


@dataclass_json
@dataclass
class ListCryptoKeysResponse:
    crypto_keys: Optional[List[cryptokey.CryptoKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoKeys' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
