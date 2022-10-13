from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpaymentsresellersubscriptionv1promotion


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    promotions: Optional[List[googlecloudpaymentsresellersubscriptionv1promotion.GoogleCloudPaymentsResellerSubscriptionV1Promotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotions' }})
    
