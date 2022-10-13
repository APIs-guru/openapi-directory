from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import smtpmsa

class SendAsVerificationStatusEnum(str, Enum):
    VERIFICATION_STATUS_UNSPECIFIED = "verificationStatusUnspecified"
    ACCEPTED = "accepted"
    PENDING = "pending"


@dataclass_json
@dataclass
class SendAs:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefault' }})
    is_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPrimary' }})
    reply_to_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyToAddress' }})
    send_as_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendAsEmail' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    smtp_msa: Optional[smtpmsa.SMTPMsa] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smtpMsa' }})
    treat_as_alias: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treatAsAlias' }})
    verification_status: Optional[SendAsVerificationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationStatus' }})
    
