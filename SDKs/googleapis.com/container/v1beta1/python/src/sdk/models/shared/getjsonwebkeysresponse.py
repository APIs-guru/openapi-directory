from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httpcachecontrolresponseheader
from . import jwk


@dataclass_json
@dataclass
class GetJSONWebKeysResponse:
    cache_header: Optional[httpcachecontrolresponseheader.HTTPCacheControlResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheHeader' }})
    keys: Optional[List[jwk.Jwk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    
