from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import userconsentrepresentation
from . import credentialrepresentation
from . import federatedidentityrepresentation


@dataclass_json
@dataclass
class UserRepresentation:
    access: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    client_consents: Optional[List[userconsentrepresentation.UserConsentRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientConsents' }})
    client_roles: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRoles' }})
    created_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdTimestamp' }})
    credentials: Optional[List[credentialrepresentation.CredentialRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    disableable_credential_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableableCredentialTypes' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    email_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailVerified' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    federated_identities: Optional[List[federatedidentityrepresentation.FederatedIdentityRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federatedIdentities' }})
    federation_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federationLink' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    not_before: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notBefore' }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    realm_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realmRoles' }})
    required_actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredActions' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    service_account_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountClientId' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
