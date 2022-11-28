from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DomainRedirectTypeEnum(str, Enum):
    REDIRECT_TYPE_UNSPECIFIED = "REDIRECT_TYPE_UNSPECIFIED"
    MOVED_PERMANENTLY = "MOVED_PERMANENTLY"


@dataclass_json
@dataclass
class DomainRedirect:
    r"""DomainRedirect
    Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration.
    """
    
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    type: Optional[DomainRedirectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
