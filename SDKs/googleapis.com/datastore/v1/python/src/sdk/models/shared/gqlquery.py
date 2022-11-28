from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GqlQuery:
    r"""GqlQuery
    A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
    """
    
    allow_literals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowLiterals') }})
    named_bindings: Optional[dict[str, GqlQueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedBindings') }})
    positional_bindings: Optional[List[GqlQueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionalBindings') }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    
