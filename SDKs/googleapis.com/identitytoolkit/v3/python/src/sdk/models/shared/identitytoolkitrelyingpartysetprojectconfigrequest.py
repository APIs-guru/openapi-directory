from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import emailtemplate
from . import idpconfig
from . import emailtemplate
from . import emailtemplate
from . import emailtemplate


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartySetProjectConfigRequest:
    allow_password_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowPasswordUser' }})
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    authorized_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedDomains' }})
    change_email_template: Optional[emailtemplate.EmailTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeEmailTemplate' }})
    delegated_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegatedProjectNumber' }})
    enable_anonymous_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAnonymousUser' }})
    idp_config: Optional[List[idpconfig.IdpConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idpConfig' }})
    legacy_reset_password_template: Optional[emailtemplate.EmailTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyResetPasswordTemplate' }})
    reset_password_template: Optional[emailtemplate.EmailTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetPasswordTemplate' }})
    use_email_sending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useEmailSending' }})
    verify_email_template: Optional[emailtemplate.EmailTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifyEmailTemplate' }})
    
