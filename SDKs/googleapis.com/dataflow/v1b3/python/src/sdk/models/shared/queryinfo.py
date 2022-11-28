from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class QueryInfoQueryPropertyEnum(str, Enum):
    QUERY_PROPERTY_UNSPECIFIED = "QUERY_PROPERTY_UNSPECIFIED"
    HAS_UNBOUNDED_SOURCE = "HAS_UNBOUNDED_SOURCE"


@dataclass_json
@dataclass
class QueryInfo:
    r"""QueryInfo
    Information about a validated query.
    """
    
    query_property: Optional[List[QueryInfoQueryPropertyEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryProperty') }})
    
