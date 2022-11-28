from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KerberosConfig:
    r"""KerberosConfig
    Specifies Kerberos related configuration.
    """
    
    cross_realm_trust_admin_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossRealmTrustAdminServer') }})
    cross_realm_trust_kdc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossRealmTrustKdc') }})
    cross_realm_trust_realm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossRealmTrustRealm') }})
    cross_realm_trust_shared_password_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossRealmTrustSharedPasswordUri') }})
    enable_kerberos: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableKerberos') }})
    kdc_db_key_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kdcDbKeyUri') }})
    key_password_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPasswordUri') }})
    keystore_password_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keystorePasswordUri') }})
    keystore_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keystoreUri') }})
    kms_key_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyUri') }})
    realm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realm') }})
    root_principal_password_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootPrincipalPasswordUri') }})
    tgt_lifetime_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tgtLifetimeHours') }})
    truststore_password_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truststorePasswordUri') }})
    truststore_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truststoreUri') }})
    
