from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OAuthClientStatusEnum(str, Enum):
    ACTIVE = "active"
    DISABLED = "disabled"
    SUSPENDED = "suspended"


@dataclass_json
@dataclass
class OAuthClientInput:
    r"""OAuthClientInput
    A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target=\"_top\" href=\"https://login.linode.com\">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
    
    """
    
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_uri') }})
    

@dataclass_json
@dataclass
class OAuthClient:
    r"""OAuthClient
    A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target=\"_top\" href=\"https://login.linode.com\">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
    
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_uri') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    status: Optional[OAuthClientStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail_url') }})
    
