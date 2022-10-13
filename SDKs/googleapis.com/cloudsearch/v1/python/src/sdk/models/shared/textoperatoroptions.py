from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TextOperatorOptions:
    exact_match_with_operator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exactMatchWithOperator' }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorName' }})
    
