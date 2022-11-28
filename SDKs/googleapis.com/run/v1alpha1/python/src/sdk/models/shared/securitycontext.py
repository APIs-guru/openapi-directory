from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SecurityContext:
    r"""SecurityContext
    Not supported by Cloud Run SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence.
    """
    
    run_as_user: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runAsUser') }})
    
