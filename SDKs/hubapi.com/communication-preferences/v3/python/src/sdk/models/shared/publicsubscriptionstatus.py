from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PublicSubscriptionStatusLegalBasisEnum(str, Enum):
    LEGITIMATE_INTEREST_PQL = "LEGITIMATE_INTEREST_PQL"
    LEGITIMATE_INTEREST_CLIENT = "LEGITIMATE_INTEREST_CLIENT"
    PERFORMANCE_OF_CONTRACT = "PERFORMANCE_OF_CONTRACT"
    CONSENT_WITH_NOTICE = "CONSENT_WITH_NOTICE"
    NON_GDPR = "NON_GDPR"
    PROCESS_AND_STORE = "PROCESS_AND_STORE"
    LEGITIMATE_INTEREST_OTHER = "LEGITIMATE_INTEREST_OTHER"

class PublicSubscriptionStatusSourceOfStatusEnum(str, Enum):
    PORTAL_WIDE_STATUS = "PORTAL_WIDE_STATUS"
    BRAND_WIDE_STATUS = "BRAND_WIDE_STATUS"
    SUBSCRIPTION_STATUS = "SUBSCRIPTION_STATUS"

class PublicSubscriptionStatusStatusEnum(str, Enum):
    SUBSCRIBED = "SUBSCRIBED"
    NOT_SUBSCRIBED = "NOT_SUBSCRIBED"


@dataclass_json
@dataclass
class PublicSubscriptionStatus:
    brand_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandId' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    legal_basis: Optional[PublicSubscriptionStatusLegalBasisEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legalBasis' }})
    legal_basis_explanation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legalBasisExplanation' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    preference_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferenceGroupName' }})
    source_of_status: PublicSubscriptionStatusSourceOfStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceOfStatus' }})
    status: PublicSubscriptionStatusStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
