from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import chain


@dataclass_json
@dataclass
class SearchChainsResponse:
    chains: Optional[List[chain.Chain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chains' }})
    
