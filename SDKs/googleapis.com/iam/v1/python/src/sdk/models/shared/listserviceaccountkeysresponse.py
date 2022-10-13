from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceaccountkey


@dataclass_json
@dataclass
class ListServiceAccountKeysResponse:
    keys: Optional[List[serviceaccountkey.ServiceAccountKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    
