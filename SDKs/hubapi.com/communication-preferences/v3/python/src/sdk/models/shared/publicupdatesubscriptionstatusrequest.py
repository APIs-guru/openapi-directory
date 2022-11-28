from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PublicUpdateSubscriptionStatusRequestLegalBasisEnum(str, Enum):
    LEGITIMATE_INTEREST_PQL = "LEGITIMATE_INTEREST_PQL"
    LEGITIMATE_INTEREST_CLIENT = "LEGITIMATE_INTEREST_CLIENT"
    PERFORMANCE_OF_CONTRACT = "PERFORMANCE_OF_CONTRACT"
    CONSENT_WITH_NOTICE = "CONSENT_WITH_NOTICE"
    NON_GDPR = "NON_GDPR"
    PROCESS_AND_STORE = "PROCESS_AND_STORE"
    LEGITIMATE_INTEREST_OTHER = "LEGITIMATE_INTEREST_OTHER"


@dataclass_json
@dataclass
class PublicUpdateSubscriptionStatusRequest:
    r"""PublicUpdateSubscriptionStatusRequest
    A request to change the status of a contact's subscription.
    """
    
    email_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    subscription_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    legal_basis: Optional[PublicUpdateSubscriptionStatusRequestLegalBasisEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legalBasis') }})
    legal_basis_explanation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legalBasisExplanation') }})
    
