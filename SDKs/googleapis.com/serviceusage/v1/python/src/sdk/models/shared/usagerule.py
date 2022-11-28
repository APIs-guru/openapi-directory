from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UsageRule:
    r"""UsageRule
    Usage configuration rules for the service. NOTE: Under development. Use this rule to configure unregistered calls for the service. Unregistered calls are calls that do not contain consumer project identity. (Example: calls that do not contain an API key). By default, API methods do not allow unregistered calls, and each method call must be identified by a consumer project identity. Use this rule to allow/disallow unregistered calls. Example of an API that wants to allow unregistered calls for entire service. usage: rules: - selector: \"*\" allow_unregistered_calls: true Example of a method that wants to allow unregistered calls. usage: rules: - selector: \"google.example.library.v1.LibraryService.CreateBook\" allow_unregistered_calls: true
    """
    
    allow_unregistered_calls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowUnregisteredCalls') }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    skip_service_control: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipServiceControl') }})
    
