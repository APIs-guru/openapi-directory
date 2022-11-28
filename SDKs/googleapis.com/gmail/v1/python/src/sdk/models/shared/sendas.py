from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SendAsVerificationStatusEnum(str, Enum):
    VERIFICATION_STATUS_UNSPECIFIED = "verificationStatusUnspecified"
    ACCEPTED = "accepted"
    PENDING = "pending"


@dataclass_json
@dataclass
class SendAs:
    r"""SendAs
    Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom \"from\" address. Send-as aliases correspond to the \"Send Mail As\" feature in the web interface.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefault') }})
    is_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPrimary') }})
    reply_to_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyToAddress') }})
    send_as_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendAsEmail') }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    smtp_msa: Optional[SMTPMsa] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smtpMsa') }})
    treat_as_alias: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treatAsAlias') }})
    verification_status: Optional[SendAsVerificationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationStatus') }})
    
