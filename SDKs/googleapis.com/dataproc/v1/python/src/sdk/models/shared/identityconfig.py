from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentityConfig:
    r"""IdentityConfig
    Identity related configuration, including service account based secure multi-tenancy user mappings.
    """
    
    user_service_account_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userServiceAccountMapping') }})
    
