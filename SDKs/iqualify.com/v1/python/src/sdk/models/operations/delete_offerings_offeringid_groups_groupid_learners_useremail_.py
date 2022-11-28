from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailRequest:
    path_params: DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailPathParams = field()
    

@dataclass
class DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
