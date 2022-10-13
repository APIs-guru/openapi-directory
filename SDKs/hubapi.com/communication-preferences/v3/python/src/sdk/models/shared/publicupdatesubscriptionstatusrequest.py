from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    email_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    legal_basis: Optional[PublicUpdateSubscriptionStatusRequestLegalBasisEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legalBasis' }})
    legal_basis_explanation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legalBasisExplanation' }})
    subscription_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    
