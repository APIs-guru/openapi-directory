from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ListPopulationTermOperatorEnum(str, Enum):
    NUM_EQUALS = "NUM_EQUALS"
    NUM_LESS_THAN = "NUM_LESS_THAN"
    NUM_LESS_THAN_EQUAL = "NUM_LESS_THAN_EQUAL"
    NUM_GREATER_THAN = "NUM_GREATER_THAN"
    NUM_GREATER_THAN_EQUAL = "NUM_GREATER_THAN_EQUAL"
    STRING_EQUALS = "STRING_EQUALS"
    STRING_CONTAINS = "STRING_CONTAINS"

class ListPopulationTermTypeEnum(str, Enum):
    CUSTOM_VARIABLE_TERM = "CUSTOM_VARIABLE_TERM"
    LIST_MEMBERSHIP_TERM = "LIST_MEMBERSHIP_TERM"
    REFERRER_TERM = "REFERRER_TERM"


@dataclass_json
@dataclass
class ListPopulationTerm:
    r"""ListPopulationTerm
    Remarketing List Population Rule Term.
    """
    
    contains: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contains') }})
    negation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negation') }})
    operator: Optional[ListPopulationTermOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    remarketing_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remarketingListId') }})
    type: Optional[ListPopulationTermTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    variable_friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variableFriendlyName') }})
    variable_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variableName') }})
    
