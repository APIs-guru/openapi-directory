from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Operation:
    r"""Operation
    A representation of an execution of an Apps Script function started with run. The execution response does not arrive until the function finishes executing. The maximum execution runtime is listed in the [Apps Script quotas guide](/apps-script/guides/services/quotas#current_limitations). After execution has started, it can have one of four outcomes: - If the script function returns successfully, the response field contains an ExecutionResponse object with the function's return value in the object's `result` field. - If the script function (or Apps Script itself) throws an exception, the error field contains a Status object. The `Status` object's `details` field contains an array with a single ExecutionError object that provides information about the nature of the error. - If the execution has not yet completed, the done field is `false` and the neither the `response` nor `error` fields are present. - If the `run` call itself fails (for example, because of a malformed request or an authorization error), the method returns an HTTP response code in the 4XX range with a different format for the response body. Client libraries automatically convert a 4XX response into an exception class. 
    """
    
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('done') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
