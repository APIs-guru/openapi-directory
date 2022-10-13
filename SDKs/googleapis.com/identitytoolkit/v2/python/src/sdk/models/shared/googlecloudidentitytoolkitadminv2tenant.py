from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2clientpermissionconfig
from . import googlecloudidentitytoolkitadminv2hashconfig
from . import googlecloudidentitytoolkitadminv2inheritance
from . import googlecloudidentitytoolkitadminv2multifactorauthconfig
from . import googlecloudidentitytoolkitadminv2monitoringconfig
from . import googlecloudidentitytoolkitadminv2smsregionconfig


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2Tenant:
    allow_password_signup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowPasswordSignup' }})
    autodelete_anonymous_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autodeleteAnonymousUsers' }})
    client: Optional[googlecloudidentitytoolkitadminv2clientpermissionconfig.GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    disable_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableAuth' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_anonymous_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAnonymousUser' }})
    enable_email_link_signin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableEmailLinkSignin' }})
    hash_config: Optional[googlecloudidentitytoolkitadminv2hashconfig.GoogleCloudIdentitytoolkitAdminV2HashConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashConfig' }})
    inheritance: Optional[googlecloudidentitytoolkitadminv2inheritance.GoogleCloudIdentitytoolkitAdminV2Inheritance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inheritance' }})
    mfa_config: Optional[googlecloudidentitytoolkitadminv2multifactorauthconfig.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mfaConfig' }})
    monitoring: Optional[googlecloudidentitytoolkitadminv2monitoringconfig.GoogleCloudIdentitytoolkitAdminV2MonitoringConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoring' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sms_region_config: Optional[googlecloudidentitytoolkitadminv2smsregionconfig.GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsRegionConfig' }})
    test_phone_numbers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testPhoneNumbers' }})
    
