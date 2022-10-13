from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import actionfunctionidentifier


@dataclass_json
@dataclass
class CollectionResponseActionFunctionIdentifierNoPaging:
    results: List[actionfunctionidentifier.ActionFunctionIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
