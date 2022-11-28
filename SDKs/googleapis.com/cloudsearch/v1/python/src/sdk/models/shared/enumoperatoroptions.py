from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnumOperatorOptions:
    r"""EnumOperatorOptions
    Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*.
    """
    
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    
