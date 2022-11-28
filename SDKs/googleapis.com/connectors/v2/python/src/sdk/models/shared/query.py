from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Query:
    r"""Query
    A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{\"query\":\"select *\"}`.
    """
    
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
