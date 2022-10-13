from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import cardresponse


@dataclass_json
@dataclass
class CardListResponse:
    results: List[cardresponse.CardResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
