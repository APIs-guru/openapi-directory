from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest:
    r"""GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest
    Request message for Import methods.
    """
    
    errors_config: Optional[GoogleCloudRecommendationengineV1beta1ImportErrorsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorsConfig') }})
    input_config: Optional[GoogleCloudRecommendationengineV1beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
