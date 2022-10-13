from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gqlqueryparameter
from . import gqlqueryparameter


@dataclass_json
@dataclass
class GqlQuery:
    allow_literals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowLiterals' }})
    named_bindings: Optional[dict[str, gqlqueryparameter.GqlQueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedBindings' }})
    positional_bindings: Optional[List[gqlqueryparameter.GqlQueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionalBindings' }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    
