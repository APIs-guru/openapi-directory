from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkerMessageCode:
    r"""WorkerMessageCode
    A message code is used to report status and error messages to the service. The message codes are intended to be machine readable. The service will take care of translating these into user understandable messages if necessary. Example use cases: 1. Worker processes reporting successful startup. 2. Worker processes reporting specific errors (e.g. package staging failure).
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
