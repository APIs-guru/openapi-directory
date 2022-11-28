from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WorkloadIdentityPoolProviderStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class WorkloadIdentityPoolProvider:
    r"""WorkloadIdentityPoolProvider
    A configuration for an external identity provider.
    """
    
    attribute_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeCondition') }})
    attribute_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeMapping') }})
    aws: Optional[Aws] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aws') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oidc: Optional[Oidc] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidc') }})
    saml: Optional[Saml] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saml') }})
    state: Optional[WorkloadIdentityPoolProviderStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class WorkloadIdentityPoolProviderInput:
    r"""WorkloadIdentityPoolProviderInput
    A configuration for an external identity provider.
    """
    
    attribute_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeCondition') }})
    attribute_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeMapping') }})
    aws: Optional[Aws] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aws') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    oidc: Optional[Oidc] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidc') }})
    saml: Optional[Saml] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saml') }})
    
