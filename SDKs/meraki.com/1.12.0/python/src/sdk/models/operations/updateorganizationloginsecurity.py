from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationLoginSecurityPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationLoginSecurityRequestBody:
    account_lockout_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountLockoutAttempts') }})
    enforce_account_lockout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceAccountLockout') }})
    enforce_different_passwords: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceDifferentPasswords') }})
    enforce_idle_timeout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceIdleTimeout') }})
    enforce_login_ip_ranges: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceLoginIpRanges') }})
    enforce_password_expiration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcePasswordExpiration') }})
    enforce_strong_passwords: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceStrongPasswords') }})
    enforce_two_factor_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceTwoFactorAuth') }})
    idle_timeout_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleTimeoutMinutes') }})
    login_ip_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginIpRanges') }})
    num_different_passwords: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numDifferentPasswords') }})
    password_expiration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordExpirationDays') }})
    

@dataclass
class UpdateOrganizationLoginSecurityRequest:
    path_params: UpdateOrganizationLoginSecurityPathParams = field()
    request: Optional[UpdateOrganizationLoginSecurityRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationLoginSecurityResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_login_security_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
