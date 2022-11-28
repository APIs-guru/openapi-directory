from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Waiter:
    r"""Waiter
    A Waiter resource waits for some end condition within a RuntimeConfig resource to be met before it returns. For example, assume you have a distributed system where each node writes to a Variable resource indicating the node's readiness as part of the startup process. You then configure a Waiter resource with the success condition set to wait until some number of nodes have checked in. Afterwards, your application runs some arbitrary code after the condition has been met and the waiter returns successfully. Once created, a Waiter resource is immutable. To learn more about using waiters, read the [Creating a Waiter](/deployment-manager/runtime-configurator/creating-a-waiter) documentation.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('done') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    failure: Optional[EndCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    success: Optional[EndCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
