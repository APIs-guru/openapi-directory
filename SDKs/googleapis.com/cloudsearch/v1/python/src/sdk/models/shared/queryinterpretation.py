from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class QueryInterpretationInterpretationTypeEnum(str, Enum):
    NONE = "NONE"
    BLEND = "BLEND"
    REPLACE = "REPLACE"

class QueryInterpretationReasonEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    QUERY_HAS_NATURAL_LANGUAGE_INTENT = "QUERY_HAS_NATURAL_LANGUAGE_INTENT"
    NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY = "NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY"


@dataclass_json
@dataclass
class QueryInterpretation:
    interpretation_type: Optional[QueryInterpretationInterpretationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interpretationType' }})
    interpreted_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interpretedQuery' }})
    reason: Optional[QueryInterpretationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
