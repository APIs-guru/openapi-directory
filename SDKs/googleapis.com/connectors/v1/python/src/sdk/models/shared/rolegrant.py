from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RoleGrantPrincipalEnum(str, Enum):
    PRINCIPAL_UNSPECIFIED = "PRINCIPAL_UNSPECIFIED"
    CONNECTOR_SA = "CONNECTOR_SA"


@dataclass_json
@dataclass
class RoleGrant:
    r"""RoleGrant
    This configuration defines all the Cloud IAM roles that needs to be granted to a particular GCP resource for the selected prinicpal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user.
    """
    
    helper_text_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helperTextTemplate') }})
    principal: Optional[RoleGrantPrincipalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
