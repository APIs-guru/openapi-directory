from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentityProviderRepresentation:
    add_read_token_role_on_create: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addReadTokenRoleOnCreate' }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    first_broker_login_flow_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstBrokerLoginFlowAlias' }})
    internal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalId' }})
    link_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkOnly' }})
    post_broker_login_flow_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postBrokerLoginFlowAlias' }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerId' }})
    store_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeToken' }})
    trust_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trustEmail' }})
    
