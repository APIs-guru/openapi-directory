from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCryptoKeyVersionsResponse:
    r"""ListCryptoKeyVersionsResponse
    Response message for KeyManagementService.ListCryptoKeyVersions.
    """
    
    crypto_key_versions: Optional[List[CryptoKeyVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeyVersions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
