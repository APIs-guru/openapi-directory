from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetJSONWebKeysResponse:
    r"""GetJSONWebKeysResponse
    GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517
    """
    
    cache_header: Optional[HTTPCacheControlResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheHeader') }})
    keys: Optional[List[Jwk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    
