from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BusinessChainSearchTerms:
    business_chain_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessChainQuery' }})
    region_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionQuery' }})
    
