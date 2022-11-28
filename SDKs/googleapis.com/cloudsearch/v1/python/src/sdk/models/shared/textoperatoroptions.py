from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TextOperatorOptions:
    r"""TextOperatorOptions
    Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
    """
    
    exact_match_with_operator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactMatchWithOperator') }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    
