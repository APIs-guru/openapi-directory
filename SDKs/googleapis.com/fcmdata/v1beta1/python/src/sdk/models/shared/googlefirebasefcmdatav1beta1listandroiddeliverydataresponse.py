from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebasefcmdatav1beta1androiddeliverydata


@dataclass_json
@dataclass
class GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse:
    android_delivery_data: Optional[List[googlefirebasefcmdatav1beta1androiddeliverydata.GoogleFirebaseFcmDataV1beta1AndroidDeliveryData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidDeliveryData' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
