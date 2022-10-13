from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cryptokeyversion


@dataclass_json
@dataclass
class ListCryptoKeyVersionsResponse:
    crypto_key_versions: Optional[List[cryptokeyversion.CryptoKeyVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoKeyVersions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
