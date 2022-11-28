from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class QueryRequestFormFactorEnum(str, Enum):
    ALL_FORM_FACTORS = "ALL_FORM_FACTORS"
    PHONE = "PHONE"
    DESKTOP = "DESKTOP"
    TABLET = "TABLET"


@dataclass_json
@dataclass
class QueryRequest:
    r"""QueryRequest
    Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record.
    """
    
    effective_connection_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveConnectionType') }})
    form_factor: Optional[QueryRequestFormFactorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }})
    metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
