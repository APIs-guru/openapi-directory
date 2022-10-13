from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyCreateAuthURIRequest:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    auth_flow_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authFlowType' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    continue_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continueUri' }})
    custom_parameter: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customParameter' }})
    hosted_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostedDomain' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    oauth_consumer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauthConsumerKey' }})
    oauth_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauthScope' }})
    openid_realm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openidRealm' }})
    ota_app: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaApp' }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerId' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantId' }})
    tenant_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantProjectNumber' }})
    
