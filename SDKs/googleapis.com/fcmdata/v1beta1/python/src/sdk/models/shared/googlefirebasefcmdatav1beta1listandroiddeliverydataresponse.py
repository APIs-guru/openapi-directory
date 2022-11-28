from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse:
    r"""GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse
    Response message for ListAndroidDeliveryData.
    """
    
    android_delivery_data: Optional[List[GoogleFirebaseFcmDataV1beta1AndroidDeliveryData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDeliveryData') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
