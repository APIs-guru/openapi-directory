from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import marketingeventexternaluniqueidentifier


@dataclass_json
@dataclass
class CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging:
    results: List[marketingeventexternaluniqueidentifier.MarketingEventExternalUniqueIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
