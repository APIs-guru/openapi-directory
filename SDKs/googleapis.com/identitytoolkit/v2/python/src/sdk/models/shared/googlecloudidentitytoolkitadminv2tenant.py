from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2Tenant:
    r"""GoogleCloudIdentitytoolkitAdminV2Tenant
    A Tenant contains configuration for the tenant in a multi-tenant project.
    """
    
    allow_password_signup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPasswordSignup') }})
    autodelete_anonymous_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autodeleteAnonymousUsers') }})
    client: Optional[GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    disable_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableAuth') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email_privacy_config: Optional[GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailPrivacyConfig') }})
    enable_anonymous_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAnonymousUser') }})
    enable_email_link_signin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableEmailLinkSignin') }})
    hash_config: Optional[GoogleCloudIdentitytoolkitAdminV2HashConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashConfig') }})
    inheritance: Optional[GoogleCloudIdentitytoolkitAdminV2Inheritance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritance') }})
    mfa_config: Optional[GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaConfig') }})
    monitoring: Optional[GoogleCloudIdentitytoolkitAdminV2MonitoringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoring') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sms_region_config: Optional[GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsRegionConfig') }})
    test_phone_numbers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testPhoneNumbers') }})
    

@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2TenantInput:
    r"""GoogleCloudIdentitytoolkitAdminV2TenantInput
    A Tenant contains configuration for the tenant in a multi-tenant project.
    """
    
    allow_password_signup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPasswordSignup') }})
    autodelete_anonymous_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autodeleteAnonymousUsers') }})
    client: Optional[GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    disable_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableAuth') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email_privacy_config: Optional[GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailPrivacyConfig') }})
    enable_anonymous_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAnonymousUser') }})
    enable_email_link_signin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableEmailLinkSignin') }})
    inheritance: Optional[GoogleCloudIdentitytoolkitAdminV2Inheritance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritance') }})
    mfa_config: Optional[GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaConfig') }})
    monitoring: Optional[GoogleCloudIdentitytoolkitAdminV2MonitoringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoring') }})
    sms_region_config: Optional[GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsRegionConfig') }})
    test_phone_numbers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testPhoneNumbers') }})
    
