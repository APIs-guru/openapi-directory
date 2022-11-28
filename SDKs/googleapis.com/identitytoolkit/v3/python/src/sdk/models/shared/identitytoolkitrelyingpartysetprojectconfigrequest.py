from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartySetProjectConfigRequest:
    r"""IdentitytoolkitRelyingpartySetProjectConfigRequest
    Request to set the project configuration.
    """
    
    allow_password_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPasswordUser') }})
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    authorized_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedDomains') }})
    change_email_template: Optional[EmailTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeEmailTemplate') }})
    delegated_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegatedProjectNumber') }})
    enable_anonymous_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAnonymousUser') }})
    idp_config: Optional[List[IdpConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpConfig') }})
    legacy_reset_password_template: Optional[EmailTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyResetPasswordTemplate') }})
    reset_password_template: Optional[EmailTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetPasswordTemplate') }})
    use_email_sending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useEmailSending') }})
    verify_email_template: Optional[EmailTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyEmailTemplate') }})
    
