from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import aws
from . import oidc
from . import saml

class WorkloadIdentityPoolProviderStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class WorkloadIdentityPoolProvider:
    attribute_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeCondition' }})
    attribute_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeMapping' }})
    aws: Optional[aws.Aws] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aws' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    oidc: Optional[oidc.Oidc] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidc' }})
    saml: Optional[saml.Saml] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saml' }})
    state: Optional[WorkloadIdentityPoolProviderStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
